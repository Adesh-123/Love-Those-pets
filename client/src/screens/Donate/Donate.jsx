import "./Donate.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";

function Donate(props) {
  const paw = <FontAwesomeIcon className="donate-paw" icon={faPaw} />;
  return (
    <div className="donate-area">
      <div className="donate-image">
        <img
          className="donate-banner"
          src="https://content.active.com/Assets/Active.com+Content+Site+Digital+Assets/Article+Image+Update/2017/Dec+12/Man+Sitting+With+His+Dog-Article.jpg"
          alt="donate banner"
        />

        <div className="donate-title">
          <h2>
            Want to make a difference? Consider donating to these organizations:
          </h2>
        </div>
      </div>

      <div className="donate-container">
        <div className="donate-links">
          {" "}
          <a
            href="https://secure.aspca.org/donate/ps-gn-p2?ms=MP_PMK_Googlebrand-T4&initialms=MP_PMK_Googlebrand-T4&pcode=WPSE9XXGOGN2PK00014&lpcode=WPSE9XXGOGN1PK00014&test&ds_rl=1066461&gclid=Cj0KCQiA-aGCBhCwARIsAHDl5x-iKk-ifAm5N403viPAJ9_lvULip7pC2_iFqEIr73U84zAfUuh7zWUaAlZ_EALw_wcB&gclsrc=aw.ds"
            target="_blank"
            rel="noreferrer"
          >
            {paw} American Society for the Prevention of Cruelty to Animals
          </a>
        </div>
        <div className="donate-links">
          <a
            href="https://secure.humanesociety.org/site/Donation2?idb=1187937887&df_id=23356&mfc_pref=T&23356.donation=form1&s_src=ad_gg_slink_donate_today_11127708937_112147748314_464664250275_humane%20society&s_src=ad_gg_11127708937_112147748314_464664250275_humane%20society&gclid=Cj0KCQiA-aGCBhCwARIsAHDl5x81pXm1UfPAhlZm5zWdeAUfy5L4fx4Ezp0I_l84hW1OcCAXKy25CjAaAsTsEALw_wcB"
            target="_blank"
            rel="noreferrer"
          >
            {paw} Humane Society of the United States
          </a>
        </div>
        <div className="donate-links">
          <a
            href="https://anticruelty.org/donate"
            target="_blank"
            rel="noreferrer"
          >
            {paw} The Anti-Cruelty Society
          </a>
        </div>
      </div>

      <div>
        <h3 className="thank-you">
          Thank you for your generosity and continued support!
        </h3>
      </div>
    </div>
  );
}

export default Donate;
