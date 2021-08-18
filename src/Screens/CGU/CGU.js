import React, { useState } from "react";
import styles from "./CGU.module.css";
import CustomHeader from "../../components/CustomNavbar/CustomNavabar";

const CGU = (props) => {
  const [show, setShow] = React.useState(false);

  function handleOpenModal() {
    setShow(!show);
    console.log("handleOpenModal", show);
  }
  return (
    <div className={styles.container}>
      <div className={styles.cguHeader}>
        <CustomHeader isVisible={false} />
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.cguHead}>
          <h2>CONDITIONS GENERALES D’UTILISATION</h2>
          <h2>ET</h2>
          <h2>DE VENTE DES PRESTATIONS</h2>

          <h1>YOU.ME.IO</h1>
        </div>

        <div className={styles.contentWrapper}>
          <p>
            Les présentes conditions générales d’utilisation et de vente
            (ci-après dénommées « Conditions Générales») sont conclues entre :
          </p>
          <ul className={styles.simpleList}>
            <li>
              - La société you.me.io, société par actions simplifiée,
              immatriculée au RCS de Marseille sous le n° 888 375 110, dont le
              siège social est situé 69 rue du Rouet à Marseille F-13008,
              ci-après : « <strong>Le Prestataire</strong> ».
            </li>
          </ul>
          <p>Et</p>
          <ul className={styles.simpleList}>
            <li>
              - <strong>Le Client</strong> du site{" "}
              <a target="_blank" href="https://www.youmeio.eu">
                www.youmeio.eu
              </a>
              .
            </li>
          </ul>

          <div className={styles.cguBlock}>
            <h1 className={styles.headingPrimary}>Préambule</h1>

            <p>
              LE Prestataire exploite un site internet accessible à l’adresse
              <span>
                <a target="_blank" href="https://www.youmeio.eu">
                  {" "}
                  www.youmeio.eu{" "}
                </a>
              </span>
              , proposant :
            </p>
            <ul className={styles.simpleList}>
              <li>
                - une liste de diagnostics et de préconisations permettant au
                Client de gérer au mieux ses risques,
              </li>

              <li>
                - une place de marché en ligne dédiée à la mise en relation
                entre le Client et des experts sélectionnés par le Prestataire.
              </li>
            </ul>

            <p>
              Les experts sont des professionnels ayant été sérieusement
              sélectionnés par le Prestataire et pouvant intervenir sur une ou
              plusieurs thématiques de la gestion des risques.
            </p>
            <p>
              Les présentes Conditions Générales ont pour objet de régir les
              conditions et modalités d’utilisation et de vente du Site, ainsi
              que de définir les droits et obligations des Clients mis en
              relation sur le Site.
            </p>
            <p>
              Tout accès et/ou utilisation du Site suppose l’acceptation sans
              réserve et le respect de l’ensemble des termes des présentes
              Conditions Générales.
            </p>
          </div>
          <div className={styles.cguBlock}>
            <h1 className={styles.headingPrimary}>I – Définitions</h1>
            <p>
              <strong>Client</strong> : désigne toute personne morale ou
              physique, utilisant le Site à des fins strictement
              professionnelles, en vue de réaliser un ou plusieurs diagnostics
              de risques et d’entrer en contact ou d’être mis en relation avec
              un ou plusieurs Expert(s) afin de lui confier la réalisation d’une
              Mission.
            </p>

            <p>
              <strong>Contenu</strong> : désigne tous propos, messages ou
              informations de quelque nature que ce soit (texte, image, vidéos,
              photographies, commentaires, marques, dénominations sociales,
              etc.), mis en ligne par un Utilisateur sur le Site.
            </p>

            <p>
              <strong>Expert </strong> : désigne toute personne physique ou
              morale disposant d’un numéro SIREN et inscrite au Registre du
              Commerce et des Sociétés, au Répertoire des Métiers, à la Maison
              des Artistes, ou à tout autre organisme officiel permettant
              l’octroi d’un statut professionnel légalement valable sur le
              territoire national, pouvant être assuré à ce titre, et qui
              propose ses services aux Clients à travers le Site.
            </p>

            <p>
              <strong>Mission </strong> : désigne globalement les missions
              d’expertises qui seront réalisées par l’Expert sélectionné par le
              Client.
            </p>

            <p>
              <strong>Mission </strong> désigne le site internet dont l’adresse
              est{" "}
              <a target="_blank" href="https://www.youmeio.eu">
                {" "}
                www.youmeio.eu{" "}
              </a>{" "}
              à ce jour ou tout autre suite qui serait communiqué par le
              Prestataire
            </p>

            <p>
              <strong>Prestations </strong> désigne tous les services fournis
              par la Société à travers le Site et :
            </p>

            <ul className={styles.simpleList}>
              <li>
                - notamment le service de diagnostic délivrée par Le
                Prestataire,
              </li>

              <li>- les prestations opérationnelles fournies par l’Expert,</li>
              <li>
                - et le service de Délégation de Maitrise d’ŒUvre fournie par le
                Prestataire.
              </li>
            </ul>
          </div>

          <div className={styles.cguBlock}>
            <h1 className={styles.headingPrimary}>II – Inscription au Site</h1>
            <p>
              2.1 Pour pouvoir accéder aux Services, le Client doit créer un
              compte en s’inscrivant gratuitement sur le Site.
            </p>

            <p>
              Le Client doit être capable juridiquement de contracter et
              d’utiliser le Site conformément aux présentes Conditions Générales
              et agit de bonne foi. Le Client est tenu de fournir des
              informations exactes qu’il s’engage à mettre immédiatement à jour
              en cas de modifications. L’utilisation de surnom, nom d’emprunt ou
              tout autre « fake » est interdite et expose Le Client à des
              poursuites judiciaires.
            </p>
            <p>
              L’accès au compte créé est protégé par un identifiant et un mot de
              passe choisi par Le Client lors de son inscription sur le Site. Le
              Client est seul responsable de tout usage qui pourrait être fait
              de son identifiant et mot de passe, et seul garant de leur
              confidentialité, ainsi que de toute utilisation de son compte.
            </p>

            <p>
              2.2 Pour être référencé comme Freelance sur le Site et être
              visible des Utilisateurs, celui-ci est tenu en outre de renseigner
              de manière exacte et complète sa page profil, ainsi que de la
              mettre à jour. Le Prestataire a mis en place sur son site, une
              gestion active des mots de passe afin de pouvoir annuler un mot de
              passe et le remplacer, ou en cas d’oubli de mot de passe.
            </p>

            <p>
              Parmi les informations demandées lors de l’inscription, le Client
              devra fournir obligatoirement les informations suivies d’un (*),
              signifiant mention obligatoire. Le Client est libre de ne pas
              accepter de fournir tout ou partie de ces informations, dès lors
              l’accès au site ne lui sera pas accordé.
            </p>
            <p>
              2.3 Dans l'hypothèse où le Client n’agirait pas de bonne foi, ou
              fournirait des données fausses, inexactes, périmées ou
              incomplètes, la Société sera en droit de suspendre ou de procéder
              à la fermeture de son compte et de lui refuser, à l'avenir,
              l'accès à tout ou partie des Prestations. Le Prestataire se
              réserve le droit de toute poursuite judiciaire adéquate.
            </p>
          </div>

          <div className={styles.cguBlock}>
            <h1 className={styles.headingPrimary}>
              III – Description des Prestations et fonctionnement du Site
            </h1>

            <p>
              <strong>
                Le Prestataire met à disposition du Client des diagnostics de
                risques, permettant au Client d’engager des actions préventives
                ou correctrices, et/ou de les faire réaliser par des Experts
                sélectionnés par le Prestataire, avec possibilité pour le Client
                de déléguer la maitrise d’œuvre au Prestataire.
              </strong>
            </p>

            <p>
              L’offre commerciale est composée de l’ensemble des prestations
              ci-dessous. L’offre commerciale est valable 20 jours à partir de
              la clôture du diagnostic et disparait automatiquement du compte
              Client après ce délai.
            </p>

            <p>3.1 Le diagnostic</p>

            <p>
              Le Prestaire a mis en place un procédé permettant au Client de
              diagnostiquer un ou plusieurs risques, spécifiques à son métier.
            </p>

            <ol className={styles.numericList}>
              <li>
                le Client sélectionne le Risque pour lequel il entend mener un
                diagnostic,
              </li>
              <li>
                le Client doit alors compléter des informations durables, qui
                seront conservées par le Prestataire et pourront être modifiées
                à tout moment. Ces informations serviront également pour tout
                diagnostic ultérieur :{" "}
                <ol className={styles.alphaList} type="a">
                  <li>des informations propres à l’entreprise,</li>
                  <li>
                    des informations propres au dirigeant de l’entreprise,
                  </li>
                  <li>des informations propres au marché de l’entreprise</li>
                </ol>
              </li>

              <li>
                le Client doit alors répondre aux questions posées par le
                diagnostic sélectionné par lui et quand les réponses apportées
                lui semble être le plus correctes possibles, le Client procède à
                la clôture du diagnostic. Un diagnostic comprend généralement
                entre 20 et 30 questions. Certaines questions peuvent se
                retrouver sur plusieurs formulaires. Il conviendra de répondre
                pour chaque diagnostic, en fonction du contexte (le risque) qui
                est analysé.
              </li>
            </ol>

            <p>3.2 Le scoring</p>
            <p>
              A l’issu de la clôture du diagnostic, le Client reçoit son
              scoring, qui consiste à positionner le risque entre 0 et 500
              points, 500 points était un diagnostic parfait, avec un
              commentaire succinct et général sur la situation de l’entreprise
              pour un risque bien précis. La probabilité de survenance et
              l’impact ne sont pas mentionnés dans ce scoring qui est gratuit.
            </p>

            <p>
              Cette prestation est gratuite. Toutefois sur le même code SIREN,
              le Client ne peut bénéficier que de 10 gratuités.
            </p>
            <p>3.3 Le scoring amélioré</p>
            <p>
              Le client a la possibilité d’accéder au scoring tel que défini en
              3.2 mais également à des commentaires spécifiques en fonction de
              ses réponses au diagnostic.
            </p>
            <p>3.4 Le plan d’actions</p>
            <p>
              Le client se voit remettre le scoring amélioré et un plan
              d’actions pour les sujets le nécessitant. Un diagnostic peut
              comporter plusieurs actions composant le plan d’actions. Le plan
              d’actions est proposé en fonction des réponses aux diagnostics,
              d’où la nécessite d’avoir des réponses qualitatives lors de cette
              première étape de diagnostic.
            </p>
            <p>
              Le Client sélectionne les actions qu’il considère être les plus
              importantes au regard des commentaires du scoring. Pour aider le
              Client à sélectionner les actions à mettre en place, l’offre
              commerciale comprend une hiérarchisation des priorités. En effet
              un diagnostic est composé de plusieurs questions dont l’analyse
              permet de détecter les actions à mener dans le contexte précis de
              l’entreprise et de son environnement.
            </p>
            <ol className={styles.numericList}>
              <li>
                A l’issu du Diagnostic le client se voit remettre un scoring
                (cotation de risque) sur le risque diagnostiqué. afin de se voir
                remettre les documents de synthèse et les offres tarifaire.
              </li>
              <li>
                Le Client peut modifier son diagnostic pendant une période 8
                jours à compter de la première validation.
              </li>
            </ol>
            <p>
              Le Client s’engage à donner des informations correctes, récentes
              et reflétant la réalité. Les actions et plans d’accompagnements
              proposés par le Prestataire sont générés par un algorithme
              complexe, comprenant l’ensemble des informations contenues aux
              points 1 à 4 ci-dessus. Le Client est seul responsable des
              réponses qu’il apporte aux diagnostics. Il lui appartient de
              vérifier la véracité et qualité de ces informations, afin que le
              diagnostic soit à même de répondre aux attentes du Client.
            </p>
            <p>3.2 Les actions à engager</p>
            <p>Une fois le diagnostic validé et confirmé (</p>
            <p>
              une mise en relation facilitée entre des Freelances et des
              Clients/Porteurs de Projet ;
            </p>
            <p>
              une mise à disposition de moyens de paiement destinés à sécuriser
              le déroulé d’une Mission ;
            </p>
            <p>
              l’établissement et l’émission des factures relatives aux Missions
              réalisées, au nom et pour le compte des Freelances ;
            </p>
            <p>
              la collecte auprès des Freelances des documents requis dans le
              cadre de l’obligation de vigilance et leur mise à disposition pour
              les Clients/Porteurs de Projets ;
            </p>
            <p>
              la mise en place de services additionnels pour des
              Clients/Porteurs de Projet, entreprises de taille intermédiaire ou
              grandes entreprises;
            </p>
            <p>
              <strong>3.2</strong> Les services additionnels pour les
              Clients/Porteurs de Projet « grands comptes » comprennent un
              ensemble de services dédiés décrits plus amplement à l’adresse{" "}
              <a target="_blank" href="https://www.malt.fr/offers">
                {" "}
                www.malt.fr/offers{" "}
              </a>{" "}
              et notamment :
            </p>
            <p>
              une prestation de conseil sur mesure aux fins de recherche de
              Freelances ;
            </p>
            <p>
              une interface personnalisée de la plateforme pour le
              Client/Porteur de Projet, permettant une utilisation collaborative
              de celle-ci entre plusieurs Utilisateurs.
            </p>
            <p>
              la mise à disposition d’une bibliothèque en ligne contenant la
              documentation contractuelle dédiée du Client/Porteur de Projet ;
            </p>
            <p>des options de paiement complémentaires ;</p>
            <p>
              une possibilité de bénéficier, en option et dans certaines
              situations, de services d’affacturage auprès de la société
              Finexkap (CGPS de Finexkap) ou de toute autre société
              d’affacturage ;
            </p>
            <p>des outils de recommandation automatique de profils ;</p>
            <p>un accès à des reporting ;</p>
            <p>
              Malt Insights, outil avancé de gestion des ressources Freelances
              (suivi d’activité, reporting global groupe, paramétrages
              personnalisables etc.) ;
            </p>
            <p>
              un système de recherche permettant de proposer facilement des
              missions à des Freelances vérifiés.
            </p>
            <p>
              <strong>3.3</strong> Le Client/Porteur de Projet entre en contact
              avec le Freelance en le contactant via le Site. Après échange sur
              le champ et les modalités de la Mission, le Freelance adresse au
              Client/Porteur de Projet grâce aux outils mis à sa disposition sur
              le Site, une proposition de services.
            </p>
            <p>
              En cas d’accord, le Client/Porteur de Projet provisionne son
              compte de monnaie électronique du montant de la Mission, ce qui
              permet au Freelance de débuter la Mission (sauf en cas d’option de
              paiement sur facture, pour les Services Corporate).
            </p>
            <p>
              A l’issue de la Mission, une facture est alors établie et émise
              par la Société au nom et pour le compte du Freelance, sur la base
              des informations fournies par ce dernier et adressée par la
              Société au Client/Porteur de Projet. Le Freelance est tenu de
              communiquer à la Société toutes les informations ou autres
              mentions légales devant y figurer conformément à ses obligations
              légales, ainsi qu’il est prévu par le Mandat de Facturation.
            </p>
            <p>
              La validation de la Mission entraîne le paiement au Freelance du
              montant de la facture, déduction faite de la commission payable à
              la Société par celui-ci.
            </p>
          </div>

          <div className={styles.cguBlock}>
            <h1 className={styles.headingPrimary}>
              IV – Accès au Site et aux Services
            </h1>

            <p>
              L’accès au Site et aux Services est exclusivement réservé aux
              Utilisateurs inscrits
            </p>
            <p>
              Les Freelances doivent avoir donné mandat à la Société pour
              établir et émettre leurs factures (en acceptant le Mandat de
              Facturation afin de pouvoir utiliser les Services du Site. De
              même, ils doivent avoir téléchargé sur leur profil les documents
              requis les concernant aux fins de satisfaire à leurs obligations
              dans le cadre de la lutte contre le travail dissimulé, ainsi
              qu’aux règles de transparence (KYC) aux fins de lutte contre la
              fraude fiscale, le blanchiment d’argent et le financement du
              terrorisme.
            </p>
            <p>
              S’agissant des Utilisateurs domiciliés en dehors de France,
              ceux-ci sont également tenus de respecter toutes les obligations
              leur incombant en vertu de la législation applicable à leur statut
              dans leur pays de résidence, ainsi que les obligations découlant
              de leur utilisation du Site.
            </p>
            <p>
              Les Utilisateurs font leur affaire personnelle de la mise en place
              des moyens informatiques et de télécommunications permettant
              l’accès au Site. Ils conservent à leur charge les frais de
              télécommunication lors de l’accès à internet et de l’utilisation
              du Site.
            </p>
            <p>
              Le Site est accessible 24h/24, 7j/7 pour l’ensemble des
              Utilisateurs.
            </p>
            <p>
              La Société se réserve le droit, sans préavis, ni indemnité, de
              fermer temporairement ou définitivement le Site ou l’accès à un ou
              plusieurs Services pour effectuer une mise à jour, des
              modifications ou un changement sur les méthodes opérationnelles,
              les serveurs et les heures d’accessibilité, sans que cette liste
              ne soit limitative.
            </p>
            <p>
              La Société se réserve le droit d’apporter au Site et aux Services
              toutes les modifications et améliorations qu’elle jugera
              nécessaires ou utiles dans le cadre du bon fonctionnement du Site
              et de ses Services.
            </p>
            <p>
              Le Site est réservé à des Clients/ Porteurs de Projets et ne peut
              pas être utilisé par des intermédiaires ou des professionnels du
              recrutement agissant pour le compte d'un client final. En cas de
              violation de ces règles d’accès, outre les sanctions mentionnées à
              l’Article XVI des présentes, la Société se réserve le droit de
              limiter l'accès à ses Services notamment en réduisant la
              possibilité de contacter des Freelances sur la plateforme ou
              d’utiliser les fonctionnalités de son profil afin de mettre un
              terme à la concurrence déloyale ainsi pratiquée. Au-delà du rappel
              des règles d’usage de la plateforme figurant dans les Présentes,
              cette limitation des possibilités d’utilisation de la plateforme
              ne fait pas l’objet d’une information spécifique afin de se
              prémunir contre une réitération de cette violation de nos
              conditions d’utilisation via un nouveau profil utilisateur.
            </p>
          </div>

          <div className={styles.cguBlock}>
            <h1 className={styles.headingPrimary}>V- Prix des Services</h1>

            <p>
              Le Freelance paye une commission à la Société, calculée sur la
              base d’un pourcentage de la valeur totale du prix de la Mission.
              Cette commission est directement prélevée sur le montant payable
              au Freelance lors de la validation de la fin de la Mission par le
              Client/ Porteur de Projet.
            </p>
            <p>
              Le Prix des Services (hors options) est fixé entre 5 et 10 % HT du
              prix de la Mission, selon l’historique et la relation entre le
              Freelance et le Client/Porteur de Projet.
            </p>
            <p>
              La grille tarifaire des commissions applicables est accessible
              ici.
            </p>
            <p>
              S’agissant des Services Corporate, les tarifs sont disponibles sur
              simple demande par le biais du service client. Ces prestations
              feront alors l’objet d’un contrat spécifique entre la Société et
              le Client/Porteur de Projet.
            </p>
          </div>

          <div className={styles.cguBlock}>
            <h1 className={styles.headingPrimary}>VI- Système de paiement</h1>

            <p>
              <strong>6.1</strong> Le paiement par le Client/Porteur de Projet
              du montant de la Mission est effectué par paiement par provision
              de la Mission via un compte de monnaie électronique (compte
              séquestre). Le paiement de la provision est effectué par carte
              bancaire à travers un service de paiement sécurisé en ligne ou par
              virement.
            </p>
            <p>
              Dans le cas des Services Corporate, le Client/Porteur de Projet
              peut être autorisé à payer directement le montant de la Mission à
              son terme sans provision préalable, dans les délais de paiement
              prévus par la loi. Les conditions et modalités d’un tel paiement
              font l’objet d’un accord séparé.
            </p>

            <p>
              <strong>6.2</strong>
              Aux fins de mise en œuvre du système de paiement, la Société a
              souscrit aux services de la société Leetchi Corp. S.A., société
              agréée en tant qu’établissement de monnaie électronique,
              immatriculée au RCS luxembourgeois sous le n° B173459, dont le
              siège social est situé 26-28, rives de Clausen, L-2165, Luxembourg
              (ci-après «Mangopay»).
            </p>

            <p>
              Les Utilisateurs contractent directement avec MangoPay s’agissant
              du système de paiement par provision, et déclarent accepter les
              conditions générales de MangoPay disponibles ici conditions
              générales de MangoPay Credit Mutuel Arkea.
            </p>
            <p>
              La remise de fonds dans le cadre d’un paiement par provisionnement
              d’un compte de monnaie électronique ne constitue pas un dépôt
              bancaire et ne porte pas intérêts.
            </p>
          </div>
          <div className={styles.cguBlock}>
            <h1 className={styles.headingPrimary}>
              VII- Système d’évaluation et de recommandation
            </h1>

            <p>
              <strong>7.1</strong> A la fin de chaque Mission, les
              Clients/Porteurs de Projet et les Freelances sont encouragés à
              évaluer mutuellement leur collaboration. L’évaluation laissée par
              un Client/Porteur de Projet pourra apparaître sur la page du
              Freelance. L’évaluation laissée par un Freelance pourra être
              visible par les Freelances contactés par le Client/Porteur de
              Projet pour une nouvelle Mission.
            </p>

            <p>
              Les évaluations laissées par les Clients/Porteurs de Projet ne
              pourront être modifiées passées le délai d’un mois à compter de la
              fin de la Mission.
            </p>
            <p>
              <strong>7.2</strong> Les Freelances ont également la possibilité
              de se faire recommander par d’autres Utilisateurs tels que
              collègues, amis ou anciens clients, avec qui ils ont collaboré par
              le passé.
            </p>

            <p>
              Les recommandations pourront être cachées directement et librement
              par le Freelance sur son profil. Le Freelance s’engage toutefois à
              ne pas publier ou faire publier sur son profil des recommandations
              de pure complaisance.
            </p>
            <p>
              Les évaluations et recommandations doivent refléter des
              considérations objectives et ne sauraient, en aucun cas, comporter
              des éléments excessifs, insultants. Si tel était le cas, nous la
              Société se réserve la possibilité de supprimer cette évaluation.
            </p>
          </div>

          <div className={styles.cguBlock}>
            <h1 className={styles.headingPrimary}>VIII- Litiges</h1>
            <p>
              <strong>8.1</strong>
              Dans l’hypothèse où la Mission serait annulée de commun accord
              (que ce soit à l’initiative du Client/Porteur de Projet ou du
              Freelance) la Société remboursera, dans un délai de 15 jours, le
              montant de la Mission au Client/Porteur de Projet.
            </p>
            <p>
              <strong>8.2</strong>
              Dans l’hypothèse d’un désaccord entre le Client/Porteur de Projet
              et le Freelance sur la qualité de la prestation, le champ, les
              modalités, ou le stade de finition de la Mission, ceux-ci
              s’engagent à en informer la Société par le biais du service client
              et à faire leurs meilleurs efforts pour discuter et trouver une
              solution à l’amiable dans un délai de 45 jours.
            </p>
            <p>
              La Société pourra intervenir pour tenter de proposer une solution
              aux parties.
            </p>
            <p>
              A défaut d’accord dans ce délai, et dans l’hypothèse où la Mission
              aurait fait l’objet d’un prépaiement sur compte séquestre, la
              Société restituera, sous 15 jours, le montant de l’avance faite
              par le Client/Porteur de Projet correspondant au montant de la
              Mission, déduction faite de frais de dossier forfaitaires de 90
              euros, correspondant notamment aux frais exposés par la Société
              auprès des services prestataires de paiement ainsi qu’au frais de
              traitement du litige.
            </p>
            <p>
              Le Client/Porteur de Projet et le Freelance feront alors leur
              affaire personnelle du règlement de leur différend.
            </p>
          </div>

          <div className={styles.cguBlock}>
            <h1 className={styles.headingPrimary}>IX - Engagements</h1>

            <p>
              <strong>9.1</strong>
              L’Utilisateur s’engage à accéder et utiliser le Site et les
              Services conformément aux lois en vigueur et aux présentes
              Conditions Générales.
            </p>

            <p>
              A cet égard, l’Utilisateur reconnaît qu’aux fins exclusives de
              vérification du respect par lui des présentes Conditions Générales
              et des lois applicables, la Société peut prendre connaissance de
              tout Contenu publié ou échangé sur le Site.
            </p>
            <p>
              De même, il reconnaît que la Société peut intervenir pour modérer
              les Contenus publiés, s’ils ne respectent pas les lois et
              règlements en vigueur ainsi que les obligations des Utilisateurs
              aux termes des présentes Conditions Générales.
            </p>

            <p>
              <strong>9.2</strong>
              L’Utilisateur s’engage à réaliser toutes les déclarations et
              formalités nécessaires à son activité, ainsi qu’à satisfaire à
              toutes ses obligations légales, sociales, administratives et
              fiscales et à toutes les obligations spécifiques qui lui incombe
              le cas échéant en application du droit français et/ou de la
              législation étrangère dont il dépend, dans le cadre de son
              activité et de l’utilisation des Services.
            </p>
            <p>
              En cas de demande, l’Utilisateur s’engage à fournir, sans délai, à
              la Société tout justificatif prouvant qu’il remplit les conditions
              énoncées dans le présent article.
            </p>
            <p>
              L’Utilisateur est seul responsable du bon accomplissement des
              formalités précitées qui lui incombent. La responsabilité de la
              Société ne pourra pas être engagée à ce titre.
            </p>

            <p>
              <strong>9.3</strong>
              L’Utilisateur s’engage à faire une utilisation loyale du Site,
              notamment à ne pas contourner le Site et ses Services.
            </p>

            <p>
              De même, tout Utilisateur s’interdit de procéder à toute
              extraction du contenu du Site pour une activité similaire ou
              concurrente, ou à des fins de recrutement.
            </p>

            <p>
              <strong>9.4</strong>
              Le Client/Porteur de projet s’engage à proposer une offre de
              Mission sérieuse et suffisamment détaillée au(x) Freelance(s) avec
              le(s)quel(s) il rentre en contact par le biais du Site en vue
              d’obtenir une proposition tarifaire.
            </p>

            <p>
              A ce titre, le Client/Porteur de projet s’engage à apporter au
              Freelance toute précision nécessaire afin que le descriptif de
              l’offre de Mission soit le plus fidèle possible et n’induise pas
              le Freelance en erreur.
            </p>
            <p>
              Le Client/Porteur de projet s’interdit également d’utiliser les
              Services et le Site pour faire la promotion de son activité ou de
              celle d’un tiers. A ce titre, il s’engage notamment à ne pas
              envoyer de message publicitaire aux Utilisateurs du Site ou à les
              démarcher.
            </p>

            <p>
              <strong>9.5</strong>
              Le Client/Porteur de Projet s’engage à ne pas demander
              l’annulation de son paiement par provision en monnaie électronique
              à son établissement financier, pendant le cours de la Mission.
            </p>
            <p>
              De même, le Client/Porteur de Projet reconnaît que la validation
              de la Mission via le Site, vaut réception de la Mission et ordre
              de paiement irrévocable au bénéfice du Freelance. Par cette
              validation, le Client/Porteur de Projet déclare la Mission
              terminée et conforme et renonce définitivement à toute réclamation
              ou recours à l’encontre de la Société au titre de ce paiement.
            </p>
            <p>
              Dans l’hypothèse où le Client/Porteur de Projet n’aurait pas
              validé la Mission à l’issue de celle-ci, et sans réponse de sa
              part aux relances du Freelance et/ou de la Société, il reconnaît
              que la Société sera en droit de débloquer les montants
              provisionnés au bénéfice du Freelance, un mois après notification
              restée sans réponse adressée par le biais de l’adresse email de
              son compte utilisateur.
            </p>
            <p>
              <strong>9.6</strong>
              Le Freelance s’engage à garder une stricte confidentialité aux
              échanges qu’il aurait eu avec des Clients/Porteurs de Projet et
              aux informations qui lui auraient été transmises ou dont il aurait
              connaissance à l’occasion d’une mise en contact via le Site (ayant
              ou non donné lieu à une Mission). Les Utilisateurs s’interdisent
              notamment de partager avec tout tiers, que ce soit en privé ou sur
              les réseaux sociaux, tout échange, information ou extrait de
              conversation provenant de la messagerie du Site.
            </p>

            <p>
              <strong>9.7</strong>
              Le Freelance s’engage à ne proposer ses services et ne réaliser
              des Missions sur le Site qu’en son nom propre. Ainsi, il
              s’interdit de sous-traiter tout ou partie de la Mission à un
              tiers. Dans l’hypothèse où le Freelance exerce sous une forme
              sociale autre qu’unipersonnelle, seul le gérant, président ou
              associé de la structure, personne physique peut facturer. Il
              s’engage ainsi à créer un profil sur le Site et à réaliser la
              Mission lui-même.
            </p>
          </div>

          <div className={styles.cguBlock}>
            <h1 className={styles.headingPrimary}>X – Responsabilité</h1>
            <h1 className={styles.headingSecondary}>
              Responsabilité des Utilisateurs, Porteurs de projet et Freelances
            </h1>

            <p>
              <strong>10.1 </strong>
              L’Utilisateur est seul responsable du préjudice direct ou indirect
              qu’il est susceptible de subir du fait d’informations inexactes,
              incomplètes, et/ ou trompeuses qu’il fournirait lors de son
              inscription ou en l’absence de mise à jour de ces informations, ce
              dont il assume seul les conséquences.
            </p>

            <p>
              Il reconnaît et accepte que toute notification aux termes des
              présentes Conditions Générales pourra lui être faite par le biais
              de l’adresse email de contact renseignée lors de la création de
              son profil sur le Site
            </p>

            <p>
              <strong>10.2 </strong>
              L’Utilisateur s’interdit expressément de publier tout Contenu
              injurieux, diffamant, dénigrant, calomnieux, raciste, xénophobe,
              contraire à la morale et aux bonnes mœurs, contrefaisant, portant
              atteinte à l’ordre public ou aux droits de tiers, susceptible de
              porter atteinte aux droits, à la réputation et à l’image de la
              Société et plus généralement, dont la teneur enfreindrait la loi
              et/ou les règlements, notamment d’ordre pénal.
            </p>

            <p>
              <strong>10.3 </strong>
              Le Client/Porteur de Projet est seul responsable de la description
              de l’offre de Mission pour laquelle il sollicite une proposition
              tarifaire au Freelance. En cas d’erreur du descriptif de l’offre
              de Mission, le Client/Porteur du Projet assumera seul les
              éventuelles prestations complémentaires nécessaires et surcoûts y
              afférents en formalisant avec le Freelance un complément de
              Mission par l’intermédiaire du Site.
            </p>

            <p>
              <strong>10.4 </strong>
              L’Utilisateur est seul responsable de la conclusion et de
              l’exécution des contrats relatifs à une Mission qu’il conclut avec
              un autre Utilisateur par l’intermédiaire du Site, la Société
              n’intervenant que pour les mettre en relation. La conclusion et
              l’exécution de ces contrats, qui interviennent directement entre
              un Freelance et un Client/Porteur de Projet s’opèrent à
              l’initiative et sous la responsabilité exclusive de ces derniers.
            </p>

            <p>
              <strong>10.5 </strong>
              Le Freelance reconnaît que les outils et moyens techniques mis à
              disposition par la Société ne l’exonèrent pas de sa responsabilité
              quant aux obligations légales lui incombant. En particulier, il
              reconnaît conserver l’entière responsabilité de ses obligations
              légales et fiscales en matière de facturation au titre des
              factures originales initiales et/ou rectificatives émises en son
              nom et pour son compte par la Société, notamment en ce qui
              concerne ses obligations de déclaration et de paiement en matière
              de TVA, et ce conformément au Mandat de facturation.
            </p>

            <h1 className={styles.headingSecondary}>
              Responsabilité de la Société
            </h1>

            <p>
              <strong>10.6</strong> La Société met tous les moyens en œuvre pour
              assurer l’accès et le bon fonctionnement du Site et des Services
              24 heures sur 24, 7 jours sur 7.
            </p>

            <p>
              Néanmoins, compte tenu des limites liées à l’internet, la Société
              ne peut exclure que l’accès et le fonctionnement du Site et des
              Services soient interrompus notamment en cas de force majeure, de
              mauvais fonctionnement des équipements de l’Utilisateur, de
              dysfonctionnements du réseau internet de l’Utilisateur,
              d’opération de maintenance destinées à améliorer le Site et les
              Services.
            </p>
            <p>
              En conséquence, la Société ne saurait être tenue responsable d’une
              interruption des Services, qu’elle soit volontaire ou non, étant
              précisé qu’elle s’engage à faire ses meilleurs efforts pour
              limiter les interruptions qui lui seraient imputables.
            </p>

            <p>
              <strong>10.7</strong> La Société met à la disposition des
              Freelances et des Clients/Porteurs de projets des outils et moyens
              techniques leur permettant d’entrer en relation aux fins de
              conclure un contrat de prestation à travers le Site. Sa
              responsabilité se limite à la fourniture de ces moyens, tels que
              décrits aux présentes et à la mise en relation des Freelances et
              des Clients/Porteurs de Projet.
            </p>

            <p>
              La Société ne saurait notamment être tenue pour responsable quant
              à la fréquence de présentation des profils de Freelances sur son
              Site.
            </p>
            <p>
              La Société et l’Utilisateur sont des parties indépendantes, chacun
              agissant en son nom personnel et pour leur propre compte.
            </p>
            <p>
              La Société ne conclut aucun contrat au nom et/ou pour le compte
              d’un Freelance ou d’un Porteur de Projet, ces derniers contractant
              directement entre eux par l’intermédiaire du Site.
            </p>
            <p>
              En conséquence, la Société ne peut en aucun cas être considérée
              notamment comme employé/employeur ou agent d’un Utilisateur.
            </p>
            <p>
              La Société n’étant pas partie à quelque titre que ce soit aux
              contrats relatifs à une Mission conclus entre les Freelances et
              les Clients/Porteurs de Projet, ces derniers sont seuls
              responsables des difficultés, réclamations et litiges pouvant
              intervenir lors de la conclusion et/ou de l’exécution desdits
              contrats. En conséquence, chaque Utilisateur dégage la Société de
              toute responsabilité quant aux conséquences directes ou indirectes
              résultant de manière directe ou indirecte de la mise en relation,
              de la conclusion et/ou de l’exécution d’un tel contrat entre un
              Freelance et un Client/Porteur de projet.
            </p>
            <p>
              A ce titre, la Société ne saurait être tenue responsable de toute
              annulation de paiement ou de révocation d’autorisation de
              prélèvement à l’initiative du seul Client/Porteur de Projet, et
              des conséquences pouvant en découler.
            </p>
            <p>
              <strong>10.8</strong>
              La Société fait tout son possible pour s’assurer du contenu et de
              la validité des informations et documents transmis par les
              Freelances sur le Site dès lors qu’ils sont établis en France.
              Toutefois, la Société ne saurait être tenue pour responsable de
              quelque façon que ce soit, des infractions aux obligations leur
              incombant notamment dans le cadre de la lutte contre le travail
              dissimulé et du respect des règles de transparences, ainsi que des
              dommages pouvant en résulter.
            </p>
            <p>
              Ainsi, la Société ne saurait être tenue pour responsable des
              informations fausses, trompeuses ou non à jour qui lui sont
              communiquées par le Freelance.
            </p>
            <p>
              De même, la Société se réserve le droit de ne pas transmettre aux
              Freelances les messages de Clients/Porteurs de Projet, lorsque
              ceux-ci ne respectent pas les conditions d’utilisation du Site.
            </p>
          </div>

          <div className={styles.cguBlock}>
            <h1 className={styles.headingPrimary}>
              XI – Assurance des Freelances
            </h1>

            <p>
              <strong>11.1</strong>
              La Société a souscrit une police d’assurance «responsabilité
              civile prestataire de service» auprès de AXA France IARD Mutuelle
              afin de permettre aux Freelances de bénéficier d’une couverture
              assurantielle dans le cadre des Missions réalisées par eux via le
              Site, aux conditions prévues par la police.
            </p>

            <p>
              Cette assurance couvre le Freelance à compter de la validation de
              la proposition tarifaire par le Client/Porteur de Projet.
            </p>

            <p>
              <strong>11.2</strong>
              La Société a souscrit une police d’assurance «responsabilité
              civile prestataire de service» auprès de AXA France IARD Mutuelle
              afin de permettre aux Freelances de bénéficier d’une couverture
              assurantielle dans le cadre des Missions réalisées par eux via le
              Site, aux conditions prévues par la police.
            </p>
            <p>
              Le Freelance déclare en avoir pris pleinement connaissance en
              acceptant les présentes Conditions Générales.
            </p>

            <p>
              Le Freelance reconnait et accepte qu’en cas de litige pris en
              charge par la police AXA souscrite en son nom et pour son compte
              par la Société, il restera redevable envers cette dernière du
              montant de la franchise prévu aux conditions particulières. Le
              Freelance donne d’ores et déjà son autorisation pour que ce
              montant puisse être prélevé par la Société sur tout montant qui
              lui serait dû par des Clients/Porteurs de Projet au titre d’une
              Mission réalisée via le Site.
            </p>
            <p>
              A titre indicatif, et sans qu’une telle précision ne vienne
              ajouter ni retrancher aux conditions particulières ou générales de
              la police AXA souscrite, l’attention du Freelance est attirée sur
              le champ d’application géographique de la police, en particulier
              en ce que les dommages résultant des prestations exercées sur les
              territoires des Etats Unis d’Amérique et du Canada ou à
              destination de ces pays, sont exclus de la garantie.
            </p>

            <p>
              <strong>11.3</strong>
              La Société ne saurait être tenue pour responsable en cas de non
              application de la police AXA à un dommage quel qu’il soit.
            </p>
            <p>
              Le Freelance reconnaît par ailleurs qu’il est libre de souscrire
              lui-même une assurance responsabilité civile professionnelle en
              son nom et pour son compte, afin notamment d’étendre le domaine
              et/ou le champ d’application géographique et/ou temporel des
              garanties couvertes par la police AXA souscrite par la Société ou
              de réduire le montant des franchises prévues.
            </p>
          </div>

          <div className={styles.cguBlock}>
            <h1 className={styles.headingPrimary}>
              XII – Données personnelles
            </h1>

            <p>
              Les modalités de traitement des données liées à l’utilisation de
              la plateforme www.malt.fr et à toute autre interaction avec la
              Société sont explicitées dans la politique de protection des
              données disponible ici{" "}
              <a target="_blank" href="https://www.malt.fr/about/privacy">
                {" "}
                https://www.malt.fr/about/privacy{" "}
              </a>
              . Cette politique de protection des données explicite également
              les droits d'accès, rectification, suppression, portabilité et
              limitation dont disposent les personnes concernées par les
              traitements de données à caractère personnel que la Société met en
              œuvre. La Société a désigné un délégué à la protection des données
              qui se tient à la disposition de tout Utilisateur pour répondre à
              toute question concernant la protection des données personnelles
              chez Malt par mail adressé à privacy@malt.com et par courrier à :
              DPO, Malt Community, 241 rue Saint Denis- 75002 PARIS.
            </p>
          </div>

          <div className={styles.cguBlock}>
            <h1 className={styles.headingPrimary}>XIII – Cookies</h1>
            <p>
              Pour le bon fonctionnement du Site et des Services, des cookies
              sont implantés dans l’ordinateur de l’Utilisateur lors de sa
              connexion au Site. Les cookies sont de petits fichiers textes qui
              sont stockés dans le navigateur ou l’appareil par les sites
              Internet, les applications, les médias en ligne et les publicités.
            </p>
            <p>
              La Société dispose d’une politique d’utilisation des cookies
              disponible à cette adresse :
              <a
                target="_blank"
                href=" https://www.malt.fr/about/privacy/cookies"
              >
                {" "}
                https://www.malt.fr/about/privacy/cookies{" "}
              </a>
              et qui décrit les différentes catégories de cookies que les
              Services Malt utilisent et précisent les raisons de leur
              utilisation. La liste des fournisseurs de cookies tiers est
              fournie uniquement à titre indicatif et n’est pas exhaustive.
              Cette politique explicite également la procédure à suivre afin
              paramétrer vos préférences en matière de cookies.
            </p>
          </div>

          <div className={styles.cguBlock}>
            <h1 className={styles.headingPrimary}>
              XVI – Propriété Intellectuelle
            </h1>

            <h1 className={styles.headingSecondary}>14.1 Du Site</h1>

            <p>
              Le Site et chacun des éléments qui le composent, notamment mais
              non limitativement, les textes, les images, les vidéos, les
              photographies, les marques, les logos, les dénominations sociales,
              les noms de domaine sont la propriété exclusive de la Société ou
              de celle de ses partenaires.
            </p>

            <p>
              Ces éléments sont protégés par les lois relatives à la propriété
              intellectuelle et autres, et notamment le droit d’auteur.
            </p>

            <p>
              Toute reproduction ou représentation, intégrale ou partielle, du
              Site ou de l’un des éléments qui le composent, sans l’autorisation
              de la Société, est interdite et constitue une contrefaçon
              sanctionnée par le Code de la Propriété Intellectuelle.
            </p>

            <h1 className={styles.headingSecondary}>14.2 Des Contenus</h1>

            <p>
              Tout Utilisateur qui publie du Contenu sur le Site garde l’entière
              propriété de tout ce qu’il publie.
            </p>
            <p>
              En créant un profil ou en laissant des recommandations sur les
              profils, l’Utilisateur autorise expressément la Société à
              utiliser, diffuser, héberger, stocker, reproduire, communiquer,
              publier, modifier, adapter, traduire et afficher ces Contenus
              publics sur le Site, les réseaux sociaux, les blogs exploités par
              cette dernière et/ou sur tous autres supports (notamment support
              physique et numérique, dossier de presse, support commercial,
              matériel promotionnel et/ou publicitaire), par tous moyens, à des
              fins d’exploitation, d’amélioration, de promotion, de marketing,
              de publicité des Services et du Site ou pour les besoins de la
              mise en place de partenariats. Cette autorisation est valable pour
              le monde entier et pour toute la durée de l’inscription de
              l’Utilisateur.
            </p>
            <p>
              L’Utilisateur reconnaît que toute utilisation de son Contenu
              effectuée par la Société préalablement à sa désinscription, la
              suppression ou la résiliation de son compte ne pourra pas être
              remise en cause.
            </p>
          </div>

          <div className={styles.cguBlock}>
            <h1 className={styles.headingPrimary}>XV - Liens hypertexte</h1>

            <p>
              <strong>15.1</strong>
              L’Utilisateur est autorisé à créer un ou plusieurs lien(s)
              hypertexte(s) pointant par exemple vers la page d’accueil du Site
              ou vers sa page profil s’il s’agit d’un Freelance.
            </p>

            <p>
              Les Utilisateurs s’interdisent de créer tout lien en provenance de
              sites qui ne seraient pas conformes à la législation en vigueur ou
              qui seraient de nature à nuire aux intérêts, à la réputation et/ou
              à l’image du Site et de la Société.
            </p>
            <p>
              En tout état de cause, la Société se réserve le droit de mettre
              fin à cette autorisation à tout moment s’il lui paraît que le lien
              établi avec le Site est de nature à porter atteinte à ses
              intérêts, à sa réputation et/ou son image.
            </p>
            <p>
              En aucun cas, l’existence d’un lien hypertexte en provenance d’un
              site tiers vers le Site n’implique une coopération et/ou un
              partenariat entre le Site et ce site tiers. La Société n’exerce
              aucun contrôle sur les sites de tiers et n’assume par conséquent,
              aucune responsabilité quant aux contenus et aux produits et/ou
              services disponibles sur ou à partir de ces sites tiers comportant
              un lien hypertexte vers le Site.
            </p>
            <p>
              <strong>15.2</strong>Le Site peut contenir des liens vers des
              sites de partenaires de la Société ou vers des sites de tiers. La
              Société n’exerce aucun contrôle sur ces sites et n’assume par
              conséquent, aucune responsabilité quant à la disponibilité de ces
              sites, leur contenu et sur les produits et/ou services disponibles
              sur ou à partir de ces sites.
            </p>
            <p>
              La Société ne sera aucunement responsable des dommages directs ou
              indirects pouvant survenir à l’occasion de l’accès de
              l’Utilisateur au site du partenaire et/ou du tiers et de
              l’utilisation des contenus et les produits et/ou services de ce
              site par l’Utilisateur.
            </p>
          </div>

          <div className={styles.cguBlock}>
            <h1 className={styles.headingPrimary}>
              XVI – Durée, résiliation et sanctions
            </h1>

            <p>
              Le présent contrat est conclu pour une durée indéterminée à
              compter de l’acceptation des Conditions Générales par
              l’Utilisateur.
            </p>
            <p>
              Toute utilisation du Site et des Services contraire aux Conditions
              Générales et/ou aux lois et règlements en vigueur donne droit à la
              Société de suspendre, sans préavis, le compte de l’Utilisateur ou
              de refuser à l’Utilisateur à l'avenir l'accès à tout ou partie du
              Site, sans préjudice de tous dommages et intérêts éventuels que la
              Société serait en droit de réclamer.
            </p>
            <p>
              La Société pourra, par ailleurs, cinq (5) jours après en avoir
              informé l’Utilisateur par le biais de la messagerie, fermer de
              plein droit le compte de l’Utilisateur suspendu et ce, sans que ne
              soit due aucune indemnité à quelque titre que ce soit.
            </p>
            <p>
              Ces sanctions pourront notamment être prises dans les cas suivants
              :
            </p>
            <p>
              - communication de fausses informations par l’Utilisateur
              (documents, localisation, expérience...) ;
            </p>
            <p>- contournement du Site ;</p>
            <p>
              - sous-traitance des Missions qui sont confiées à un Freelance, à
              des salariés ou à des tiers ;
            </p>
            <p>
              De même, dans l’hypothèse où l’Utilisateur ferait l’objet de
              litiges répétés ou de signalements des Clients/Porteurs de Projet
              remontés au Service Client de la Société, la Société sera en droit
              de retarder la visibilité du contenu hébergé au sein des résultats
              du moteur de recherche, de suspendre ou de fermer son compte.
            </p>
            <p>
              La fermeture du compte de l’Utilisateur par la Société entraîne de
              plein droit la résiliation des présentes Conditions Générales.
            </p>
          </div>

          <div className={styles.cguBlock}>
            <h1 className={styles.headingPrimary}>XVII – Service clientèle</h1>
            <p>
              Pour toute question ou information concernant le Site et les
              Services, l’Utilisateur peut contacter la Société via la rubrique
              « contact » sur le Site ou en lui adressant un courrier
              électronique à l’adresse suivante : support@malt.fr.
            </p>

            <p>
              L’Utilisateur peut aussi trouver des réponses à ses questions par
              téléphone au 01 82 83 15 11.
            </p>
          </div>

          <div className={styles.cguBlock}>
            <h1 className={styles.headingPrimary}>
              XVIII – Nullité – Renonciation
            </h1>
            <p>
              Dans l’hypothèse où l’une des clauses du présent contrat serait
              déclarée nulle et non avenue par un changement de législation, de
              réglementation ou par une décision de justice, cela ne saurait en
              aucun cas affecter la validité et le respect des présentes
              Conditions Générales.
            </p>
            <p>
              Le défaut pour la Société d’exercer les droits qui lui sont
              reconnus en application des présentes ne constitue pas une
              renonciation à faire valoir ses droits.
            </p>
          </div>

          <div className={styles.cguBlock}>
            <h1 className={styles.headingPrimary}>
              XIX – Modification des Conditions Générales
            </h1>
            <p>
              La Société se réserve la possibilité de modifier tout ou partie
              des présentes Conditions Générales
            </p>
            <p>
              La Société informera l’Utilisateur des modifications apportées aux
              présentes Conditions Générales dès leur mise en ligne sur le Site.
            </p>
            <p>
              A défaut d’adhésion aux nouvelle Conditions Générales,
              l’Utilisateur dispose d’un délai de 24h à compter de la date de
              notification pour en faire part à la Société par courrier
              électronique.
            </p>
            <p>
              Dans l’hypothèse où l’Utilisateur n’aurait pas notifié son
              désaccord dans le délai de prévu ci-dessus, il sera réputé avoir
              accepté les modifications.
            </p>
          </div>

          <div className={styles.cguBlock}>
            <h1 className={styles.headingPrimary}>
              XX – Droit applicable et juridiction compétente
            </h1>

            <p>
              Les présentes Conditions Générales sont soumises au droit
              français. Tout litige relatif à leur formation, conclusion,
              interprétation et/ou exécution relève de la compétence exclusive
              des juridictions dans le ressort de la Cour d’appel de Paris.
            </p>
            <p>Date des dernières modifications : 1er décembre 2019</p>
          </div>
        </div>
      </div>
      {/* <div style={{ height: "100%" }}>
        <LandingFooter handleOpenModal={handleOpenModal} />
      </div> */}
    </div>
  );
};

export default CGU;
