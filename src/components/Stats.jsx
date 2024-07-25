import {
  FACEBOOK_MAX_CHARACHERS,
  INSTAGRAM_MAX_CHARACTERS,
} from "../lib/constants";

export default function Stats({ numberOfCharacters, numberOfWords }) {
  return (
    <section className="stats">
      <Stat label="Words" number={numberOfWords} />
      <Stat label="Characters" number={numberOfCharacters} />
      <Stat
        label="Instagram"
        number={INSTAGRAM_MAX_CHARACTERS - numberOfCharacters}
      />
      <Stat
        label="Facebook"
        number={FACEBOOK_MAX_CHARACHERS - numberOfCharacters}
      />
    </section>
  );
}

function Stat({ label, number }) {
  return (
    <section className="stat">
      <span className={`stat__number ${number < 0 && "stat__number--limit"}`}>
        {number}
      </span>
      <h2 className={`second-heading`}>{label}</h2>
    </section>
  );
}
