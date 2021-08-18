import React from "react";
import styles from "./PersonalData.module.css";

// components
import CustomHeader from "../../components/CustomNavbar/CustomNavabar";

const PersonalData = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.dataHeader}>
        <CustomHeader isVisible={false} />
      </div>

      <div className={styles.contentContainer}>
        <div className={styles.dataHead}>
          <div className={styles.dataHeadContent}>
            <h2>La politique de confidentialité chez Risk.fr</h2>
          </div>

          <p className={styles.dataHeadText}>V1.0 – 02 avril 2021</p>
        </div>

        <div className={styles.contentWrapper}>
          <h1 className={styles.headingPrimary2}>
            1. Conservation et utilisation de vos données personnelles
          </h1>

          <p>
            Les données personnelles relatives à l’Utilisateur, recueillies
            directement par l’intermédiaire des formulaires et indirectement au
            cours de leur navigation vers et sur le Site, et toutes informations
            futures, ne sont destinées qu’à un usage exclusif de l’Editeur
            <strong> YOU.ME.IO</strong> SAS, ainsi que le cas échéant des autres
            sociétés apparentées ou non à <strong>YOU.ME.IO</strong> SAS,
            responsables de la distribution des services{" "}
            <strong> riskr.fr</strong>, en fonction de l’implantation
            géographique de l’Utilisateur, dans le cadre de la mise en œuvre des
            services offerts aux utilisateurs sur le Site, ainsi que pour
            l’établissement de statistiques à usage interne, et ne font l’objet
            d’aucune communication ou cession à des tiers, autres que les
            prestataires techniques en charge de la gestion du Site, lesquels
            sont tenus de respecter la confidentialité des informations et de ne
            les utiliser que pour l’opération bien précise pour laquelle ils
            doivent intervenir.
          </p>

          <p>
            Ce fichier est accessible uniquement par la direction, les
            collaborateurs du pôle marketing et du pôle commercial, les
            consultants risques, internes ou externes de{" "}
            <strong> riskr.fr</strong>.
          </p>

          <p>
            Conformément à la loi « informatique et libertés », vous pouvez
            exercer votre droit d’accès aux données vous concernant et les faire
            rectifier en contactant :
          </p>

          <div className="text-center pb-5">
            <h2 className={styles.headingSecondary}>YOU.ME. IO</h2>

            <p>dpo - riskr.fr</p>
            <p>69 Rue du Rouet</p>
            <p>13008 Marseille (France)</p>
          </div>

          <p>
            accompagné d’une copie d’une pièce d’identité. Idéalement, en
            recommandé avec accusé de réception, et/ou par courriel à
            <a target="_blank" href="https://www.dpo@riskfr.com">
              {" "}
              dpo@riskfr.com
            </a>
            .
          </p>

          <h1 className={styles.headingPrimary2}>
            2. Consentement et Traitement de vos données personnelles
          </h1>

          <p>
            En cochant la case de consentement obligatoire avant soumission de
            chaque formulaire du site web risk.fr{" "}
            <i>
              « J’autorise YOU.ME.IO à me contacter de façon personnalisée à
              propos de ses services . Vos données personnelles ne seront jamais
              communiquées à des tiers. »
            </i>
            ) vous autorisez explicitement le stockage et le traitement de vos
            données dans le but de vous faire connaître nos services ou nos
            informations métiers, ce dont nous vous remercions vivement !
          </p>

          <p>Vous autorisez :</p>

          <ul className={styles.simpleList}>
            <li>
              <strong>
                Un conseiller (interne) ou un consultant (externe) risk.fr
              </strong>{" "}
              à vous contacter pour toute relation commerciale
            </li>

            <li>
              <strong>Le service Marketing</strong> à vous communiquer des
              informations personnalisées sur nos services
            </li>
            <li>
              <strong>Notre solution de Marketing Comportemental.</strong> Nous
              utilisons une plateforme marketing pour suivre la navigation des
              visiteurs sur le site, collecter de l’information sur leurs
              préférences et gérer les formulaires présents sur le site. Cette
              application enregistre de l’information sur les pages que vous
              visitez, la durée de la visite, les pages de provenance, etc.
              L’expiration indiquée ci-dessous représente la durée de vie d’un
              cookie sur votre navigateur. sachant qu’à l’expiration de
              celui-ci, et si l’Utilisateur se connecte à nouveau sur le Site,
              un nouveau cookie sera automatiquement placé sur l’ordinateur de
              l’Utilisateur. Ces données comportementales sont stockées au sein
              de l’Union européenne.
            </li>
          </ul>

          <p>
            <strong>Astuce :</strong> vous ne souhaitez pas donner votre
            consentement ? Pas de souci mais cela va être compliqué !
            Envoyez-nous un mail à contact@riskr.fr, et nous vous rappellerons
            pour étudier vos attentes.
          </p>

          <h2 className={styles.headingSecondary}>
            3. Retrait du Consentement concernant vos données personnelles
          </h2>

          <h2 className={styles.headingSecondary}>
            3.1. Droit d’accès à vos données personnelles
          </h2>

          <p>
            Vous disposez d’un droit d’accès, de modification et/ou de
            suppression des données vous concernant à tout moment en contactant
            notre service informatique par voie postale :
          </p>

          <div className="text-center pb-5">
            <h2 className={styles.headingSecondary}>YOU.ME. IO</h2>

            <p>dpo - riskr.fr</p>
            <p>69 Rue du Rouet</p>
            <p>13008 Marseille (France)</p>
          </div>

          <p>
            accompagné d’une copie d’une pièce d’identité barrée. Idéalement, en
            recommandé avec accusé de réception,{" "}
          </p>

          <p>
            et/ou par courriel à{" "}
            <a target="_blank" href="https://www.dpo@riskfr.com">
              dpo@riskfr.com
            </a>
            .
          </p>

          <p>
            <strong>Sur place dans nos locaux : </strong> avec présentation
            d’une pièce d’identité. La CNIL précise : « Il est possible de se
            faire accompagner par la personne de son choix. La consultation doit
            durer suffisamment longtemps pour prendre note commodément et
            complètement. Il est possible de demander une copie des données ».
            Afin de vous accueillir au mieux merci de nous préciser
            préalablement la date de votre venue et l’horaire !
          </p>
          <p>
            Le responsable du fichier dispose d’un délai de réponse maximal de 2
            mois à compter de la demande, qu’elle ait été exercée par voie
            postale, mail ou sur place. La CNIL précise : « Si la demande est
            incomplète, le responsable du fichier est en droit de demander des
            compléments : le délai est alors suspendu et court à nouveau une
            fois ces éléments fournis ».
          </p>

          <p>
            Les limites au droit d’accès sont précisées sur le site de la CNIL
            et consultables en cliquant ici.
          </p>

          <h2 className={styles.headingSecondary}>
            3.2. Modification de vos abonnements
          </h2>
          <p>
            Vous pouvez aussi modifier librement vos abonnements à nos
            communications en cliquant sur « Modifier mes préférences » en bas
            de chacune de nos communications envoyées par courriel.
          </p>
          <p>
            Pour vous désabonner de toutes les communications de risk.fr, vous
            devez cliquer sur le lien de désabonnement qui se situe en bas de
            nos courriels. Vous pourrez ensuite choisir :
          </p>

          <ul className={styles.simpleList}>
            <li>
              de modifier vos préférences de réception de nos communications
            </li>
            <li>
              de vous désabonner de toutes les communications marketing et
              commerciales jusqu’à nouvelle soumission de votre consentement sur
              le site internet.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PersonalData;
