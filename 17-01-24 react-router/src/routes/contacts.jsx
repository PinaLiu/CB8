import React from "react";
import styles from "../styles/contacts.module.scss";

export default function Contacts() {
  return (
    <>
      <div className={styles.contacts}>
        <div>
          <h3>Contacts</h3>
          <p>
            Lorem Ipsum
            <br />
            5264 NE UK
            <br />
            +40 256 12 45 4545
          </p>
        </div>

        <div>
          <form>
            <p>
              <input type="text" id="name" placeholder="Name" />
            </p>
            <p>
              <input type="text" id="email" placeholder="Email" />
            </p>

            <p>
              <textarea placeholder="Write your message..."></textarea>
            </p>
            <input
              class="newsletter-button"
              type="button"
              id="submit"
              value="News Letters"
            />
          </form>
        </div>
      </div>
    </>
  );
}
