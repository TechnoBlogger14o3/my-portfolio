import React from 'react';

const HeroIllustration: React.FC = () => {
  return (
    <svg
      className="hero-illustration"
      viewBox="0 0 600 440"
      role="img"
      aria-label="A developer with a beard and glasses working at a laptop, with a mug and a stack of books"
    >
      <g className="hero-scene">
        <line className="desk-line" x1="28" y1="392" x2="572" y2="392" />
        <circle className="desk-dot" cx="48" cy="392" r="3.5" />
        <circle className="desk-dot" cx="552" cy="392" r="3.5" />

        <g className="monitor">
          <rect x="118" y="28" width="364" height="214" rx="18" />
          <rect x="276" y="242" width="48" height="10" rx="3" />
          <rect x="292" y="236" width="16" height="14" rx="3" />
          <g className="screen-code">
            <rect className="screen-line" x="146" y="58" width="92" height="7" rx="3" />
            <rect className="screen-line" x="146" y="76" width="68" height="7" rx="3" />
            <rect className="screen-line" x="146" y="94" width="84" height="7" rx="3" />
            <rect className="screen-line" x="146" y="112" width="52" height="7" rx="3" />
            <rect className="screen-line" x="146" y="130" width="76" height="7" rx="3" />
          </g>
          <g className="screen-diagram">
            <path className="diagram-path" d="M430 78 C454 78 454 118 430 118 C406 118 406 162 430 162" />
            <circle className="diagram-node" cx="430" cy="78" r="11" />
            <circle className="diagram-node" cx="430" cy="118" r="11" />
            <circle className="diagram-node" cx="430" cy="162" r="11" />
          </g>
        </g>

        <path
          className="shirt"
          d="M214 268c18-36 42-52 86-52s68 16 86 52c18 8 36 28 42 58H172c6-30 24-50 42-58z"
        />
        <rect className="neck" x="278" y="228" width="44" height="28" rx="12" />

        <g className="head">
          <ellipse className="hair" cx="300" cy="148" rx="72" ry="66" />
          <ellipse className="ear" cx="232" cy="176" rx="11" ry="15" />
          <ellipse className="ear" cx="368" cy="176" rx="11" ry="15" />
          <ellipse className="face" cx="300" cy="176" rx="58" ry="62" />
          <path className="hair" d="M250 150c10-46 90-46 100 0-18-18-82-18-100 0z" />
          <path className="beard" d="M252 198c-4 40 18 70 48 74 30-4 52-34 48-74-14 22-82 22-96 0z" />
          <path className="mustache" d="M276 214c8 8 40 8 48 0-10 12-38 12-48 0z" />
          <path className="brow" d="M258 158c8-7 20-7 28 0" />
          <path className="brow" d="M314 158c8-7 20-7 28 0" />
          <circle className="lens" cx="272" cy="176" r="18" />
          <circle className="lens" cx="328" cy="176" r="18" />
          <path className="bridge" d="M290 176h20" />
          <ellipse className="eye" cx="272" cy="178" rx="3.4" ry="3.8" />
          <ellipse className="eye eye-late" cx="328" cy="178" rx="3.4" ry="3.8" />
          <path className="mouth" d="M286 224c8 7 20 7 28 0" />
        </g>

        <g className="laptop">
          <rect x="168" y="262" width="264" height="128" rx="16" />
          <circle className="sticker" cx="230" cy="326" r="22" />
          <text className="sticker-label" x="230" y="332">C#</text>
          <circle className="apple-logo" cx="300" cy="328" r="15" />
          <path className="apple-leaf" d="M300 314c3-9 13-10 15-4-6 1-11 2-15 4z" />
          <path className="apple-stem" d="M300 314v-6" />
          <path
            className="js-heart"
            d="M386 322c0 0-14-8-14-18 0-8 6-12 12-12 4 0 7 2 8 5 1-3 4-5 8-5 6 0 12 4 12 12 0 10-14 18-14 18z"
          />
          <text className="js-label" x="392" y="318">JS</text>
        </g>

        <g className="mug">
          <g className="steam steam-a">
            <path d="M62 292c6-8 6-14 0-22" />
          </g>
          <g className="steam steam-b">
            <path d="M78 286c6-8 6-14 0-22" />
          </g>
          <g className="steam steam-c">
            <path d="M94 292c6-8 6-14 0-22" />
          </g>
          <path className="mug-handle" d="M112 318c22 0 22 36 0 36" />
          <rect x="46" y="304" width="66" height="78" rx="8" />
          <ellipse className="mug-rim" cx="79" cy="304" rx="33" ry="8" />
        </g>

        <g className="books">
          <rect className="book book-a" x="456" y="332" width="92" height="22" rx="3" />
          <rect className="book book-b" x="462" y="312" width="84" height="22" rx="3" />
          <rect className="book book-c" x="468" y="292" width="74" height="22" rx="3" />
          <g className="apple">
            <circle cx="505" cy="276" r="16" />
            <path className="apple-leaf" d="M505 262c4-10 16-10 18-3-7 0-14 1-18 3z" />
            <path className="apple-stem" d="M505 262v10" />
          </g>
        </g>
      </g>
    </svg>
  );
};

export default HeroIllustration;
