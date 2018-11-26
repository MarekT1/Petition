import React from 'react';
import ReactDOM from 'react-dom';
import ReactModal from 'react-modal'

ReactModal.defaultStyles.overlay.backgroundColor = '#465165';


export default class ModalDialog extends React.Component {
  constructor () {
    super();
    this.state = {
      showModal: false
    };
    
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }
  
  handleOpenModal () {
    this.setState({ showModal: true });
  }
  
  handleCloseModal () {
    this.setState({ showModal: false });
  }
  
  
  render () {
    return (
      <span>
        <a onClick={this.handleOpenModal} style={{cursor: 'pointer'}}>{this.props.linkedText}</a>
        <ReactModal 
           isOpen={this.state.showModal}
           contentLabel="Modal #1 Global Style Override Example"
           onRequestClose={this.handleCloseModal}
        >
            <button onClick={this.handleCloseModal} className="btn btn-brand btn-cta">Zatvoriť okno</button>  
            <p><strong>Zásady ochrany osobných údajov</strong></p>
              <p><strong>Informácie o spracúvaní osobných údajov</strong></p>
              <p>Slovenská Asociácia Falun Gong &nbsp;(ďalej Prevádzkovateľ) spracúva osobné údaje v súlade s GDPR – Nariadenie Európskeho parlamentu Rady EÚ 2016/679 (ďalej len Nariadenie) a zákonom č. 18/2018 o ochrane osobných údajov (ďalej len Zákon) s platnosťou od 25.5.2018 a Všeobecnými podmienkami MMM.</p>
              <p><strong>1. Identifikačné údaje prevádzkovateľa a zodpovednej osoby</strong></p>
              <p>Prevádzkovateľom osobných údajov Slovenská Asociácia Falun Gong, Šuňavcova 5, 831 02 Bratislava&nbsp;(ďalej aj „SAFG“), ktorá spracúva osobné údaje za podmienok uvedených nižšie.</p>
              <p>Ohľadom záležitostí Vašich podnetov ohľadom osobných údajov nás môžete kontaktovať písomne na adrese nášho sídla alebo emailom <a href="mailto:gdpr@falungong.sk">gdpr@falungong.sk</a></p>
              <p><strong>II. Osobné údaje, ktoré spracúvame</strong><br /> meno, priezvisko, email</p>
              <p><strong>III. Získavanie osobných údajov</strong><br /> Osobné údaje získavame priamo od dotknutých osôb prostredníctvom webovej stránky prevádzkovateľa, pri podpise petície či otvoreného listu</p>
              <p><strong>IV. Na aké účely spracúvame osobné údaje</strong><br /> a) Naše petície a otvorené listy sú vyjadrením vôle občanov a informujeme o nich naše štátne orgány a štátnych predstaviteľov.</p>
              <p>Vašu emalovú adresu nezverejňujeme, používa sa len pre účely prípadného overenia.</p>
              <p>Po skončení aktivity (petícia/otvorený list) budú vaše osobné údaje zo systému zmazané, resp. zosumarizované pre štatistické účely, takže už nebude možné zistiť ich pôvod.</p>
              <p><strong>VI. Ako dlho spracúvame osobné údaje</strong><br /> Osobné údaje sú spracovávané a uchovávané počas doby nevyhnutnej k zaisteniu všetkých práv a povinností vyplývajúcich zo zmluvy. (viď. Všeobecné podmienky účasti na MMM).</p>
              <p>Vyhradzujeme si právo upraviť tieto Podmienky Ochrany osobných údajov, aby boli vždy v súlade s platnými právnymi predpismi, alebo ak dôjde k zmenám v nami ponúkaných službách. Nové podmienky ochrany osobných údajov budú pre vás platné pri najbližšej návšteve našej webovej stránky.</p>
              <p><strong>c) Bezpečnosť dát</strong></p>
              <p>Ak poskytnete vaše osobné údaje AZR, urobíme všetky potrebné kroky preto, aby boli vaše informácie v bezpečí. Žiaľ, na internete nie je možné garantovať 100% bezpečnosť pri prenose dát. Preto, aj keď robíme všetko čo je možné, aby sme zabezpečili bezpečnosť prenosu dát, ak nám zasielate nejaké informácie, nie je možná úplná garancia bezpečnosti a robíte to na vlastné nebezpečenstvo. Akonáhle tieto informácie prijmeme, AZR urobí všetko preto, aby ich zabezpečilo vo svojich systémoch. Bezpečnosť vašich informácii však závisí aj od vás. Heslo, ktoré používate na prístup do AZR ste povinný uchovávať v tajnosti, a to bez ohľadu na to či bolo toto heslo vygenerované našim systém, alebo ste si ho zvolili sami. Žiadame vás, aby ste vaše heslo nikomu neprezradili.</p>
              <p><strong>3. Spracúvanie osobných údajov na jednotlivé účely:</strong></p>
              <ul>
                <li><strong>Petície a prieskumy verejnej mienky</strong></li>
              </ul>
              <p>Pri petíciách a hromadných pripomienkach, ktoré ste podpísali, beriete na vedomie, že&nbsp;pre riadne uplatnenie petície alebo hromadnej pripomienky musí byť táto petícia či hromadná pripomienka aj s Vašimi osobnými údajmi doručená adresátovi petície alebo hromadnej pripomienky. Pre účely petície a hromadnej pripomienky je možné adresátovi petície, resp. hromadnej pripomienky doručiť&nbsp;tieto údaje:</p>
              <ul>
                <li>vaše meno a priezvisko</li>
                <li>email</li>
                <li>PSČ</li>
                <li>komentáre</li>
              </ul>
              <p>Napríklad, podpisovú listinu petície môžeme spolu s vašim komentárom poskytnúť politikom, médiám alebo príjemcom našich kampaní. Vašu adresu a&nbsp;email nezverejníme, avšak môžeme ju predložiť konkrétnemu príjemcovi ako súčasť petície. Napríklad pre riadne uplatnenie petície elektronickou formou sme tak povinní vykonať. &nbsp;Tento spôsob spravovania petícií a výskumov je rutinnou záležitosťou pre tento druh činnosti. Taktiež môžeme vaše komentáre spolu s vaším menom, mestom a krajinou sprístupniť médiám alebo zverejniť na internete.</p>
              <p>Právnym základom spracúvania osobných údajov je článok 6 ods. 1 písm. b) Nariadenia GDPR. Spracúvanie osobných údajov AZR &nbsp;je nevyhnutné na vykonanie citovaných kampaní.</p>
              <p>Pre tento účel potrebujeme spracúvať a&nbsp;uchovávať si kontakt na Vás, teda Vaše kontaktné údaje ako je meno, priezvisko, adresa, PSČ, email. Prípadne, ak ste nám ho sami dobrovoľne poskytli aj Vaše telefonické číslo.</p>
              <p>Nikdy nezdieľame osobné údaje, ktoré ste nám poskytli bez vášho explicitného súhlasu, pokiaľ v týchto Pravidlách ochrany osobných údajov nie je uvedené inak.</p>
              <p>Právnym základom spracúvania osobných údajov je článok 6 ods. 1 písm. b) Nariadenia GDPR. Spracúvanie osobných údajov AZR &nbsp;je nevyhnutné na vykonanie citovaných kampaní.</p>
              <p>Osobné údaje sú spracúvané po dobu 20 rokov. Kedykoľvek však môžete požiadať o&nbsp;to, aby sme ďalej Vaše údaje nespracúvali a&nbsp;Vaše údaje zmazali.</p>
              <p>Stačí nás kontaktovať:</p>
              <ol start="1">
                <li>a)&nbsp;&nbsp; &nbsp;písomne zaslaním listu na adresu sídla AZR s uvedením mena a priezviska zodpovednej osoby pod názvom spoločnosti,<br /> b)&nbsp;&nbsp;&nbsp; elektronicky zaslaním e-mailu na vyššie uvedenú e-mailovú adresu <a href="mailto:gpdr@podpisem.sk">gpdr@podpisem.sk</a></li>
              </ol>
              <ul>
                <li><strong>Zasielanie e-mailov osoby prostredníctvom AZR</strong></li>
              </ul>
              <p>Portál Aliancia za rodinu umožňuje v niektorých prípadoch zasielanie emailových správ svetovým lídrom, médiám, či iným prijímateľom. V takom rozsahu, a len v tých konkrétnych prípadoch, v ktorých od vás k tomu dostaneme poverenie, zašleme email prostredníctvom emailového nástroja na našom portáli aj vo vašom mene. Súčasťou takéhoto emailu budú vaše kontaktné informácie, adresátom budete vy, vaše meno a vaša emailová adresa. V prípade, že zašlete email prostredníctvom nášho nástroja vy, zodpovednosť zaň je na vašej strane. AZR nie je zodpovedné za to ako váš email použijú adresáti kampaní, ktoré ste podporili.</p>
              <p>Právnym základom spracúvania osobných údajov je článok 6 ods. 1 písm. b) Nariadenia GDPR. Spracúvanie osobných údajov AZR &nbsp;je nevyhnutné na vykonanie citovaných kampaní.</p>
              <p>Osobné údaje sú spracúvané počas trvania kampane.</p>
              <p><strong>3.&nbsp;&nbsp; &nbsp;Práva dotknutej osoby</strong></p>
              <p>Dotknutá osoba má právo podať návrh na začatie konania na Úrad na ochranu osobných údajov Slovenskej republiky, ak sa domnieva, že je priamo dotknutá na svojich právach ustanovených Nariadením GDPR alebo príslušnými právnymi predpismi.</p>
              <p>Dotknutá osoba má voči prevádzkovateľovi právo (i) požadovať prístup k osobným údajom, (ii) na opravu osobných údajov, (iii) na vymazanie osobných údajov, (iv) na obmedzenie spracúvania osobných údajov, (v) právo na prenosnosť osobných údajov a (vi) právo namietať proti spracúvaniu osobných údajov. Tieto práva si dotknutá osoba môže uplatniť kontaktovaním AZR:</p>
              <ol start="1">
                <li>a)&nbsp;&nbsp; &nbsp;písomne zaslaním listu na adresu sídla spoločnosti s uvedením mena a priezviska zodpovednej osoby pod názvom spoločnosti,<br /> b)&nbsp;&nbsp;&nbsp; elektronicky zaslaním e-mailu na vyššie uvedenú e-mailovú adresu.</li>
              </ol>
              <ul>
                <li><strong>Príslušné právne predpisy</strong></li>
              </ul>
              <p>Príslušným právnym predpisom je najmä Nariadenie GDPR, aplikovateľný zákon o ochrane osobných údajov v účinnom znení a ostatné aplikovateľné všeobecne záväzné právne predpisy.</p>

              <button onClick={this.handleCloseModal} className="btn btn-brand btn-cta">Zatvoriť okno</button>
        </ReactModal>
      </span>
    );
  }
}
