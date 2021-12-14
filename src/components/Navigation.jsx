import beingServedIconURL from "/img/icons/serving_icon.svg";
import inQueueIconURL from "/img/icons/queue_icon.svg";
import tapStatusIconURL from "/img/icons/tap_icon.svg";
import colleagueIconURL from "/img/icons/humans_icon.svg";

export default function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <a href="#beingServed">
            <img src={beingServedIconURL} alt="icon" />
          </a>
        </li>
        <li>
          <a href="#inQueue">
            <img src={inQueueIconURL} alt="icon" />
          </a>
        </li>
        <li>
          <a href="#tapStatus">
            <img src={tapStatusIconURL} alt="icon" />
          </a>
        </li>
        <li>
          <a href="#colleagueSection">
            <img src={colleagueIconURL} alt="icon" />
          </a>
        </li>
      </ul>
    </nav>
  );
}
