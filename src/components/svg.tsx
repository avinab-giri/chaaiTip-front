import React from "react";

interface IconSvgProps {
    className?: string;
}

export const IconZeroPercentage: React.FC<IconSvgProps> = ({ className }) => {
    return (
        <svg className={className}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 41.1 49.8"
            stroke="currentColor"
        >
            <g>
                <path d="M4,22.1c0,2.6,0,5.2,0,7.8c0.1,3.1,1.2,5.8,3.6,8c0.7,0.6,1.4,1.1,2.2,1.6c0.7,0.4,1,1,0.9,1.6
                    c-0.2,1.1-1.3,1.5-2.4,1c-1.7-0.9-3.1-2.1-4.3-3.6c-2-2.5-3-5.3-3-8.5c0-5.2,0-10.3,0-15.5c0-7,5.2-12.8,12.3-13.9
                    C21-0.6,28.3,4.6,29.6,12.2c0.1,0.6,0.2,1.2,0.2,1.9c0,1.8,0,3.6,0,5.4c0,1-0.8,1.6-1.5,1.6c-0.9,0-1.5-0.7-1.5-1.6
                    c0-1.7,0-3.4,0-5.1c0-5.4-3.9-9.9-9.4-10.8C11,2.5,5,6.7,4.2,12.9c-0.1,0.7-0.1,1.3-0.1,2C4,17.3,4,19.7,4,22.1z"/>
                <path d="M34.4,37.7c3.3,0,5.9,2.6,5.8,5.8c-0.1,3.2-2.7,5.6-6.1,5.6c-3.1,0-5.7-2.7-5.7-5.7
                    C28.6,40.1,31.2,37.6,34.4,37.7z M31.6,43.4c0,1.5,1.3,2.7,2.8,2.7c1.5,0,2.9-1.3,2.8-2.8c-0.1-1.7-1.5-2.7-2.8-2.7
                    C32.8,40.7,31.6,41.8,31.6,43.4z"/>
                <path d="M13.9,29.2c0-3.2,2.6-5.7,6-5.7c3.1,0,5.7,2.6,5.7,5.7c0,2.8-2.1,5.7-5.8,5.7
                    C16.2,34.9,13.9,32.1,13.9,29.2z M19.8,31.9c1.6,0,2.8-1.2,2.8-2.7c0-1.5-1.3-2.7-2.8-2.7c-1.5,0-2.8,1.2-2.8,2.7
                    C17,30.7,18.2,31.9,19.8,31.9z"/>
                <path d="M16.9,44.4c0.1-0.2,0.3-0.6,0.6-0.9c3.6-3.5,7.2-7,10.8-10.5c2-2,4.1-4,6.1-5.9c0.4-0.4,0.9-0.7,1.5-0.6
                    c0.6,0.1,1,0.4,1.2,1c0.2,0.6,0.1,1.1-0.3,1.5c-0.9,1-1.9,1.9-2.9,2.8c-4.3,4.2-8.7,8.4-13,12.6c-0.5,0.4-0.9,0.9-1.4,1.3
                    c-0.5,0.4-1,0.5-1.6,0.3C17.3,45.7,17,45.3,16.9,44.4z"/>
            </g>
        </svg>
    );
};

export const NoMiddleMan: React.FC<IconSvgProps> = ({ className }) =>{
  return (
    <svg viewBox="0 0 25 19.8" className={className}>
      <g
        fill="none"
        stroke="#000"
        strokeWidth="0.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
      >
        {/* Top ellipse */}
        <ellipse cx="12.6" cy="2.4" rx="1.7" ry="1.9" />
        <path d="M10.8,5.1C10.6,5.2,10,5.4,9.6,5.8C9.4,6,9,6.4,8.8,7C8.8,7.3,8.7,7.6,8.8,7.8c0,0.2,0,0.5,0.2,0.6h7.2c0.2,0,0.5,0.1,0.5-0.2v-0.6c0-0.5,0-0.9-0.3-1.3c-0.6-0.9-1.5-1.2-1.7-1.2" />

        {/* Left ellipse */}
        <ellipse cx="4" cy="13.2" rx="1.5" ry="1.6" />
        <path d="M2.5,15.6c-0.2,0.1-0.7,0.2-1.1,0.6c-0.1,0.1-0.5,0.5-0.6,1c-0.1,0.2-0.1,0.5-0.1,0.7c0,0.1,0,0.4,0.2,0.5h6.2c0.2,0,0.4,0.1,0.4-0.2v-0.6c0-0.4,0-0.8-0.2-1.1c-0.5-0.7-1.3-1-1.5-1.1" />

        {/* Right ellipse */}
        <ellipse cx="21.1" cy="13.2" rx="1.5" ry="1.6" />
        <path d="M19.5,15.6c-0.2,0.1-0.7,0.2-1.1,0.6c-0.1,0.1-0.5,0.5-0.6,1c-0.1,0.2-0.1,0.5-0.1,0.7c0,0.1,0,0.4,0.2,0.5h6.2c0.2,0,0.4,0.1,0.4-0.2v-0.6c0-0.4,0-0.8-0.2-1.1c-0.5-0.7-1.3-1-1.5-1.1" />

        {/* Left connector */}
        <polyline points="9.5,14.4 9.5,15 8.5,13.8 9.5,12.7 9.5,13.3" />
        <line x1="14.8" y1="13.3" x2="9.5" y2="13.3" />
        <line x1="11.5" y1="14.4" x2="9.5" y2="14.4" />

        {/* Right connector */}
        <polyline points="15.6,15.2 15.6,14.6 16.7,15.7 15.6,16.8 15.6,16.2" />
        <line x1="15.6" y1="15.2" x2="14.4" y2="15.2" />
        <line x1="15.6" y1="16.2" x2="11.4" y2="16.2" />
      </g>
    </svg>
  );
}


export const FastSave: React.FC<IconSvgProps> = ({ className }) =>  {
  return (
    <svg className={className}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 25 18.9"
    >
      <style>
        {`
          .st0 {
            fill: none;
            stroke: #000000;
            stroke-width: 0.75;
            stroke-linecap: round;
            stroke-linejoin: round;
            stroke-miterlimit: 10;
          }
        `}
      </style>
      <g id="XMLID_2_">
        <path className="st0" d="M15.4,12.6c0,0,0,0.1-0.1,0.1" />
        <path className="st0" d="M9.6,2.8C9.7,2.8,9.7,2.8,9.6,2.8c1.2,0,2.3,0.3,3.2,0.8" />
        <path className="st0" d="M6.3,3.8C4.4,4.9,3.2,7,3.2,9.4c0,3.6,2.9,6.5,6.5,6.5c2.4,0,4.5-1.3,5.6-3.2" />
        <path className="st0" d="M17.2,14.3c-1.6,2.4-4.4,4-7.5,4c-5,0-9-4-9-8.9c0-3,1.5-5.7,3.8-7.3" />
        <polyline className="st0" points="3.2,0.6 4.6,2 6.3,3.8 7.5,5" />
        <line className="st0" x1="7.6" y1="0.6" x2="3.2" y2="0.6" />
        <polyline className="st0" points="7.6,0.6 7.6,0.7 7.5,3.2 7.5,5" />
        <line className="st0" x1="16.5" y1="7.3" x2="22.4" y2="7.3" />
        <line className="st0" x1="13" y1="11.1" x2="20.3" y2="11.1" />
        <line className="st0" x1="14.7" y1="9.4" x2="24.1" y2="9.4" />
        <path
          className="st0"
          d="M8.8,10L7.3,8.6C6.9,8.2,6.2,8.2,5.8,8.6l0,0c-0.4,0.4-0.4,1.1,0.1,1.5l1.8,1.6l0.8,0.7
            c0.4,0.4,1.1,0.4,1.5-0.1l0.7-0.8l6.1-7.2c0.4-0.4,0.3-1.1-0.1-1.5l0,0c-0.4-0.4-1.1-0.3-1.5,0.1L9.2,9.9C9.1,10,8.9,10,8.8,10z"
        />
      </g>
    </svg>
  );
}

export const Directly: React.FC<IconSvgProps> = ({ className }) =>   {
  return (
    <svg viewBox="0 0 25 25" className={className}>
      <circle cx="11" cy="13.5" r="5.1" fill="none" stroke="#020202" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10"/>
      <circle cx="11" cy="13.5" r="8.6" fill="none" stroke="#020202" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10"/>
      <line x1="7.2" y1="21.2" x2="5.1" y2="23.2" fill="none" stroke="#020202" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10"/>
      <line x1="17" y1="23.2" x2="14.9" y2="21.1" fill="none" stroke="#020202" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10"/>
      <circle cx="11" cy="13.5" r="0.8"/>
      <polyline points="21.8,2.8 23.4,3.5 21,6 19.3,5.3 18.6,3.6 21.1,1.2 21.8,2.8 19.3,5.3 17.1,7.5 14.6,10 11.7,12.9" fill="none" stroke="#020202" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10"/>
    </svg>
  );
}

export const NoHiddenCharge: React.FC<IconSvgProps> = ({ className }) =>{
  return (
    <svg viewBox="0 0 25 25" className={className}>
      {/* group with stroke-miterlimit only */}
      <g fill="none" stroke="#000" strokeWidth="0.5" strokeMiterlimit="10">
        <line x1="13.5" y1="12.1" x2="13.5" y2="12.1" />
        <path d="M11.7,13.4c-0.3,0.2-0.6,0.4-0.9,0.5C9.9,14.3,9,14.5,8,14.5c-3.8,0-6.8-3.1-6.8-6.8 c0-3.8,3.1-6.8,6.8-6.8c3.4,0,6.1,2.4,6.7,5.6" />
        <circle cx="14.4" cy="10.4" r="4" />
        <path d="M15.5,14.2l5.2,5.4c1.2,1.3,0.9,3.4-0.6,4.3c-1.3,0.8-3,0.3-3.8-1L11,14" />
        <line x1="13.5" y1="12.1" x2="13.5" y2="12.1" />
      </g>
      {/* group with rounded caps/joins */}
      <g fill="none" stroke="#000" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10">
        <line x1="13" y1="8.9" x2="15.8" y2="11.7" />
        <line x1="13" y1="11.7" x2="15.8" y2="8.9" />
        <line x1="6.2" y1="5" x2="9.7" y2="5" />
        <line x1="6.2" y1="6.1" x2="9.7" y2="6.1" />
        <line x1="8.7" y1="10.3" x2="6.4" y2="7.7" />
        <path d="M7.8,5c0.4,0.3,0.7,0.7,0.8,1.1c0,0.2,0,0.5-0.2,0.7C8.2,7.1,7.9,7.4,7.5,7.5 C7.2,7.6,6.8,7.7,6.4,7.7" />
      </g>
    </svg>
  );
}
