import React from 'react';

function Nav() {
  return (
    <div className="nav nav-row">

      <div>
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M29.5781 15.7813L17.5031 3.71258L16.6937 2.9032C16.5093 2.72001 16.2599 2.61719 16 2.61719C15.74 2.61719 15.4906 2.72001 15.3062 2.9032L2.42186 15.7813C2.23289 15.9696 2.08355 16.1937 1.98265 16.4406C1.88174 16.6875 1.83132 16.9521 1.83436 17.2188C1.84686 18.3188 2.76248 19.197 3.86248 19.197H5.19061V29.3751H26.8094V19.197H28.1656C28.7 19.197 29.2031 18.9876 29.5812 18.6095C29.7674 18.4239 29.9149 18.2032 30.0152 17.9602C30.1156 17.7172 30.1667 17.4567 30.1656 17.1938C30.1656 16.6626 29.9562 16.1595 29.5781 15.7813ZM17.75 27.1251H14.25V20.7501H17.75V27.1251ZM24.5594 16.947V27.1251H19.75V20.0001C19.75 19.3095 19.1906 18.7501 18.5 18.7501H13.5C12.8094 18.7501 12.25 19.3095 12.25 20.0001V27.1251H7.44061V16.947H4.44061L16.0031 5.39383L16.725 6.1157L27.5625 16.947H24.5594Z" fill="black" />
        </svg>
      </div>

      <div>
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M25.3333 4H6.66667C5.95942 4 5.28115 4.28095 4.78105 4.78105C4.28095 5.28115 4 5.95942 4 6.66667V25.3333C4 26.0406 4.28095 26.7189 4.78105 27.219C5.28115 27.719 5.95942 28 6.66667 28H25.3333C26.0406 28 26.7189 27.719 27.219 27.219C27.719 26.7189 28 26.0406 28 25.3333V6.66667C28 5.95942 27.719 5.28115 27.219 4.78105C26.7189 4.28095 26.0406 4 25.3333 4ZM25.3333 25.3333H6.66667V6.66667H25.3333V25.3333ZM12 22.6667H9.33333V9.33333H12V22.6667ZM17.3333 22.6667H14.6667V13.3333H17.3333V22.6667ZM22.6667 22.6667H20V16H22.6667V22.6667Z" fill="black" />
        </svg>
      </div>

      <div className="add-entry-button">
        <svg width="73" height="73" viewBox="0 0 73 73" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_d)">
            <rect x="6" y="3" width="61" height="61" rx="30.5" fill="white" />
            <rect x="5" y="2" width="63" height="63" rx="31.5" stroke="#5FC2C1" strokeWidth="2" />
          </g>
          <defs>
            <filter id="filter0_d" x="0" y="0" width="73" height="73" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="3" />
              <feGaussianBlur stdDeviation="2" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
      {/* <div className="add-entry-button" onClick={ }>
        <div className="button-icon">
        </div>
      </div> */}

      <div>
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.33333 16H12V18.6666H9.33333V16ZM28 7.99996V26.6666C28 27.3739 27.719 28.0521 27.219 28.5522C26.7189 29.0523 26.0406 29.3333 25.3333 29.3333H6.66667C5.95942 29.3333 5.28115 29.0523 4.78105 28.5522C4.28095 28.0521 4 27.3739 4 26.6666V7.99996C4 7.29272 4.28095 6.61444 4.78105 6.11434C5.28115 5.61424 5.95942 5.33329 6.66667 5.33329H8V2.66663H10.6667V5.33329H21.3333V2.66663H24V5.33329H25.3333C26.0406 5.33329 26.7189 5.61424 27.219 6.11434C27.719 6.61444 28 7.29272 28 7.99996ZM6.66667 10.6666H25.3333V7.99996H6.66667V10.6666ZM25.3333 26.6666V13.3333H6.66667V26.6666H25.3333ZM20 18.6666V16H22.6667V18.6666H20ZM14.6667 18.6666V16H17.3333V18.6666H14.6667ZM9.33333 21.3333H12V24H9.33333V21.3333ZM20 24V21.3333H22.6667V24H20ZM14.6667 24V21.3333H17.3333V24H14.6667Z" fill="black" />
        </svg>
      </div>

      <div>
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 8C15.0111 8 14.0444 8.29325 13.2222 8.84265C12.3999 9.39206 11.759 10.173 11.3806 11.0866C11.0022 12.0002 10.9031 13.0055 11.0961 13.9755C11.289 14.9454 11.7652 15.8363 12.4645 16.5355C13.1637 17.2348 14.0546 17.711 15.0246 17.9039C15.9945 18.0969 16.9998 17.9978 17.9134 17.6194C18.8271 17.241 19.6079 16.6001 20.1574 15.7779C20.7068 14.9556 21 13.9889 21 13C21 11.6739 20.4732 10.4021 19.5355 9.46447C18.5979 8.52678 17.3261 8 16 8Z" fill="black" />
          <path d="M16 2C13.2311 2 10.5243 2.82109 8.22202 4.35943C5.91973 5.89777 4.12532 8.08427 3.06569 10.6424C2.00607 13.2006 1.72882 16.0155 2.26901 18.7313C2.80921 21.447 4.14258 23.9416 6.10051 25.8995C8.05845 27.8574 10.553 29.1908 13.2687 29.731C15.9845 30.2712 18.7994 29.9939 21.3576 28.9343C23.9157 27.8747 26.1022 26.0803 27.6406 23.778C29.1789 21.4757 30 18.7689 30 16C29.9958 12.2883 28.5194 8.72977 25.8948 6.10518C23.2702 3.48059 19.7117 2.00423 16 2ZM23.992 24.926C23.9721 23.6143 23.4377 22.363 22.5039 21.4416C21.5702 20.5202 20.3118 20.0025 19 20H13C11.6882 20.0025 10.4298 20.5202 9.4961 21.4416C8.56235 22.363 8.02794 23.6143 8.00801 24.926C6.19457 23.3067 4.91574 21.1749 4.34084 18.8127C3.76594 16.4505 3.92211 13.9693 4.78864 11.6979C5.65518 9.42637 7.19123 7.47167 9.19338 6.09257C11.1955 4.71347 13.5693 3.97503 16.0005 3.97503C18.4317 3.97503 20.8055 4.71347 22.8076 6.09257C24.8098 7.47167 26.3458 9.42637 27.2124 11.6979C28.0789 13.9693 28.2351 16.4505 27.6602 18.8127C27.0853 21.1749 25.8064 23.3067 23.993 24.926H23.992Z" fill="black" />
        </svg>
      </div>

    </div>
  );
}

export default Nav;
/*
styles:
.nav {
  overflow: hidden;
  background-color: #000000;
  position: fixed;
  bottom: 0;
  width: 100%;
}

.nav-row {
  display: flex;
  justify-content: space-between;
  margin: ;
}

.add-entry-button {
  height: 61px;
  width: 61px;
}

*/

/* this might work for the add entry main center button on the footer nav.
      <svg width="73" height="73" viewBox="0 0 73 73" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d)">
<rect x="6" y="3" width="61" height="61" rx="30.5" fill="white"/>
<rect x="5" y="2" width="63" height="63" rx="31.5" stroke="#5FC2C1" stroke-width="2"/>
</g>
<defs>
<filter id="filter0_d" x="0" y="0" width="73" height="73" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
<feOffset dy="3"/>
<feGaussianBlur stdDeviation="2"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
</filter>
</defs>
</svg>
 */

/*
button css:
X: 157px
Y: 0px
W: 61px
H: 61px
Corner Radius: 1000px
X Constraint: Scale
Y Constraint: Scale
Fill: Solid
#FFFFFF
Stroke: Solid
#5FC2C1
Align: Outside
Width: 2px
Effect: Drop Shadow
Radius: 4px
Offset: 0px, 3px
rgba(0, 0, 0, 0.25)

drop shadow for the button
Effect: Drop Shadow
Radius: 4px
Offset: 0px, 3px
rgba(0, 0, 0, 0.25)

*/
