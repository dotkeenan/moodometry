
require('dotenv/config');
const express = require('express');

const db = require('./database');
const ClientError = require('./client-error');
const staticMiddleware = require('./static-middleware');
const sessionMiddleware = require('./session-middleware');

const app = express();

app.use(staticMiddleware);
app.use(sessionMiddleware);
app.use(express.json());

app.get('/api/entries/mood/:moodId', (req, res, next) => {
  const values = [req.params.moodId];
  const sql =
    'select * from "entries" where "moodId" = $1';
  db.query(sql, values)
    .then(result => res.status(200).json(result.rows))
    .catch(err => next(err));
});

app.get('/api/entries/event/:eventsId', (req, res, next) => {
  const values = [req.params.eventsId];
  const sql =
    'select * from "entries" where "eventsId" = $1';
  db.query(sql, values)
    .then(result => res.status(200).json(result.rows))
    .catch(err => next(err));
});

app.get('/api/entries/dow/:dowId', (req, res, next) => {
  const sql =
    'select * from "entries"';
  db.query(sql)
    .then(result => {
      const filteredResult = result.rows.filter(row => {
        const rowDate = row.time;
        return rowDate.getDay().toString() === req.params.dowId;
      });
      res.status(200).json(filteredResult);
    })
    .catch(err => next(err));
});

app.get('/api/entries/search', (req, res, next) => {
  const values = [];
  let parameterPosition = 1;

  const sqlBase = `
    select "m"."label" as "mood",
          "time",
          "ev"."label" as "event",
          "participants",
          "note",
          "entryId",
          "m"."imageUrl" as "imageUrl",
          To_Char("time", 'Dy, DD Mon | ') as "date",
          To_Char("time",  'HH12:MIpm') as "hour"
      from "entries"
      join "moods" as "m" using ("moodId")
      join "events" as "ev" using ("eventsId")
  `;
  let sql = '';
  if (!req.query.moodId && !req.query.eventId) {
    sql = sqlBase + 'order by "time" ' + req.query.sort;
  } else {
    let isAddAnd = false;
    sql = sqlBase + ' where ';
    if (req.query.moodId) {
      isAddAnd = true;
      sql += '"moodId" = $' + parameterPosition++;
      values.push(req.query.moodId);
    }

    if (req.query.eventId) {
      sql += (isAddAnd ? ' and' : ' ') + '"eventsId" = $' + parameterPosition++;
      values.push(req.query.eventId);
    }

    if (req.query.sort) {
      sql += ' order by "time" ' + req.query.sort;
    } else {
      sql += ' order by "time" DESC';
    }
  }

  db.query(sql, values)
    .then(result => {
      let filteredResult = result.rows;
      if (req.query.dowId) {
        filteredResult = result.rows.filter(row => {
          const rowDate = row.time;
          return rowDate.getDay().toString() === req.query.dowId;
        });
      }
      res.status(200).json(filteredResult);
    })
    .catch(err => next(err));
});

app.put('/api/entries/moodId/:entryId', (req, res, next) => {
  const values = [req.body.moodId, req.params.entryId];
  const sql =
    `update "entries"
      set "moodId"  = $1
      where "entryId" = $2;
    `;
  db.query(sql, values)
    .then(result => {
      res.status(200).json({});
    })
    .catch(err => next(err));
});

app.put('/api/entries/eventsId/:entryId', (req, res, next) => {
  const values = [req.body.eventsId, req.params.entryId];
  const sql =
    `update "entries"
      set "eventsId"  = $1
      where "entryId" = $2;
    `;
  db.query(sql, values)
    .then(result => {
      res.status(200).json({});
    })
    .catch(err => next(err));
});

app.put('/api/entries/participants/:entryId', (req, res, next) => {
  const values = [req.body.participants, req.params.entryId];
  const sql =
    `update "entries"
      set "participants"  = $1
      where "entryId" = $2;
    `;
  db.query(sql, values)
    .then(result => {
      res.status(200).json({});
    })
    .catch(err => next(err));
});

app.put('/api/entries/notes/:entryId', (req, res, next) => {
  const values = [req.body.notes, req.params.entryId];
  const sql =
    `update "entries"
      set "notes"  = $1
      where "entryId" = $2;
    `;
  db.query(sql, values)
    .then(result => {
      res.status(200).json({});
    })
    .catch(err => next(err));
});

app.put('/api/entries/:entryId', (req, res, next) => {
  const values = [req.body.eventsId, req.body.participants, req.body.notes, req.params.entryId];
  const sql =
    `update "entries"
      set "eventsId"  = $1,
      "participants"  = $2,
      "note"  = $3
      where "entryId" = $4;
    `;
  db.query(sql, values)
    .then(result => {
      res.status(200).json({});
    })
    .catch(err => next(err));
});

app.delete('/api/entries/:entryId', (req, res, next) => {
  const sql =
    `delete from "entries"
    where "entryId" = ${req.params.entryId};
    `;
  db.query(sql)

    .then(result => {

      let filteredResult = result.rows;
      if (req.query.dowId) {
        filteredResult = result.rows.filter(row => {
          const rowDate = row.time;
          return rowDate.getDay().toString() === req.query.dowId;
        });
      }

      res.status(200).json(filteredResult);
    })
    .catch(err => next(err));
});

app.get('/api/events', (req, res, next) => {
  const sql = `
    select
    "eventsId",
    "label"
    from "events"
  `;
  db.query(sql)
    .then(result => res.status(200).json(result.rows))
    .catch(err => next(err));
});

app.get('/api/stats', (req, res, next) => {
  const sql = `
    select "m"."label" as "mood",
          "time",
          "m"."moodId",
          "ev"."label" as "event",
          "ev"."imageUrl" as "eventUrl",
          "ev"."eventsId",
          "m"."imageUrl" as "moodUrl",
          To_Char("time", 'Dy') as "day",
          To_Char("time", 'Mon') as "month",
          To_Char("time", 'DD') as "digitDay",
          To_Char("time",  'HH12:MIpm') as "hour"
      from "entries"
      join "moods" as "m" using ("moodId")
      join "events" as "ev" using ("eventsId")
  `;
  db.query(sql)
    .then(result => res.status(200).json(result.rows))
    .catch(err => next(err));
});

app.get('/api/entries', (req, res, next) => {
  const sql = `
    select "m"."label" as "mood",
          "time",
          "ev"."label" as "event",
          "participants",
          "note",
          "entryId",
          "m"."imageUrl" as "imageUrl",
          To_Char("time", 'Dy, DD Mon | ') as "date",
          To_Char("time",  'HH12:MIpm') as "hour"
      from "entries"
      join "moods" as "m" using ("moodId")
      join "events" as "ev" using ("eventsId")
     order by "time" desc
  `;
  db.query(sql)
    .then(result => res.status(200).json(result.rows))
    .catch(err => next(err));
});

app.get('/api/events/social', (req, res, next) => {
  const sql = `
    select "events"."label",
           "imageUrl",
           "eventTypeId",
           "eventsId",
           "et"."label" as "eventTypeLabel"
      from "events"
      join "eventTypes" as "et" using ("eventTypeId")
     where "et"."label" = 'social';
  `;
  db.query(sql)
    .then(result => res.status(200).json(result.rows))
    .catch(err => next(err));
});

app.get('/api/events/hobbies', (req, res, next) => {
  const sql = `
    select "events"."label",
           "imageUrl",
           "eventTypeId",
           "eventsId",
           "et"."label" as "eventTypeLabel"
      from "events"
      join "eventTypes" as "et" using ("eventTypeId")
     where "et"."label" = 'hobbies';
  `;
  db.query(sql)
    .then(result => res.status(200).json(result.rows))
    .catch(err => next(err));
});

app.get('/api/events/productivity', (req, res, next) => {
  const sql = `
    select "events"."label",
           "imageUrl",
           "eventTypeId",
           "eventsId",
           "et"."label" as "eventTypeLabel"
      from "events"
      join "eventTypes" as "et" using ("eventTypeId")
     where "et"."label" = 'productivity';
  `;
  db.query(sql)
    .then(result => res.status(200).json(result.rows))
    .catch(err => next(err));
});

app.get('/api/events/chores', (req, res, next) => {
  const sql = `
    select "events"."label",
           "imageUrl",
           "eventTypeId",
           "eventsId",
           "et"."label" as "eventTypeLabel"
      from "events"
      join "eventTypes" as "et" using ("eventTypeId")
     where "et"."label" = 'chores';
  `;
  db.query(sql)
    .then(result => res.status(200).json(result.rows))
    .catch(err => next(err));
});

app.get('/api/moods', (req, res, next) => {
  const sql = `
    select *
      from "moods"
  `;
  db.query(sql)
    .then(result => res.status(200).json(result.rows))
    .catch(err => next(err));
});

app.delete('/api/entries/:entryId', (req, res, next) => {
  const sql =
    `delete from "entries"
    where "entryId" = ${req.params.entryId};
    `;
  db.query(sql)
    .then(result => {
      res.status(204).json({
      });
    })
    .catch(err => next(err));
});

app.post('/api/entries', (req, res, next) => {
  const sql = `
    insert into "entries" ("moodId", "eventsId", "note", "participants", "time")
        values ($1, $2, $3, $4, $5)
    returning *;
  `;
  const values = [req.body.moodId, req.body.eventId, req.body.note, req.body.participants, req.body.time];
  db.query(sql, values)
    .then(result => res.status(201).json(result.rows))
    .catch(err => next(err));
});

app.get('/api/health-check', (req, res, next) => {
  db.query('select \'successfully connected\' as "message"')
    .then(result => res.json(result.rows[0]))
    .catch(err => next(err));
});

app.use('/api', (req, res, next) => {
  next(new ClientError(`cannot ${req.method} ${req.originalUrl}`, 404));
});

app.use((err, req, res, next) => {
  if (err instanceof ClientError) {
    res.status(err.status).json({ error: err.message });
  } else {
    console.error(err);
    res.status(500).json({
      error: 'an unexpected error occurred'
    });
  }
});

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port', process.env.PORT);
});
