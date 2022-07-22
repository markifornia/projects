/**
* @author Mark Matanza
*
* Library Dependencies
*
* @version jQuery v3.4.1
* @version Bootstrap v4.3.1
* @version PopperJS 1.12.9
*
*/

(function($) {

  $(document).ready(function() {

    /* Manage Drop Down Toggle State */
    $(".dropdown").on("show.bs.dropdown", function(event){

      $('.dropdown-arrow-down').addClass('toggle-arrow');

    });

    $(".dropdown").on("hide.bs.dropdown", function(event){

      $('.dropdown-arrow-down').removeClass('toggle-arrow');

    });

    /* Create look up table */
    // usage: mapDictionary.<state>

    var mapDictionary = {

      // Define global states
      modalId: '#map-modal',
      modalContent: '#map-modal .modal-content',
      modalTitle: '#map-modal .modal-title',
      modalBody: '#map-modal .modal-body',
      modalClose: '.modal-content .close',
      stateModalColor: '#state-modal-color',

      // Events
      dimElementHover: 'dim-element-hover',
      dimElementClick: 'dim-element-click',
      dimmedPiece: '.dimmed-piece',

      // Mobile
      stateMobileCarousel: '#state-carousel',
      stateMobileSwap: '#state-carousel img.state-swap',
      stateMobileContent: '.state-carousel-content',

      // List of States

      // AL - Alabama
      alabama: {
        stateSelector: '#al-colored, #al-colored path, #al-colored rect, #al-colored text, #al-colored line, .al-mobile-piece, .al-mobile-click',
        stateDimmed: '#al-dimmed',
        stateModal: 'al-modal',
        stateColor: 'pending-state',
        stateTitle: 'Alabama',
        stateContent: '<p>In April of 2019, a bill was proposed that would create the Alabama Sports Wagering Commission, which would oversee all legal sports gambling in the state.</p>',
        stateMobilePiece: 'images/mobile/alabama-mobile-piece.png',
        stateMobileBg: 'al-slide'
      },

      // AK - Alaska
      // Note: Uses Polygon
      // Special case: .ak-group-dimmed
      alaska: {
        stateSelector: '#ak-colored, #ak-colored polygon, #ak-colored path, #ak-colored rect, #ak-colored text, #ak-colored line, .ak-mobile-piece, .ak-mobile-click',
        stateDimmed: '.ak-group-dimmed',
        stateModal: 'ak-modal',
        stateColor: 'not-legal-state',
        stateTitle: 'Alaska',
        stateContent: '<p>Alaska has not introduced any legislation to legalize sports betting in the state at this time.</p>',
        stateMobilePiece: 'images/mobile/alaska-mobile-piece.png',
        stateMobileBg: 'ak-slide'
      },

      // AZ - Arizona
      arizona: {
        stateSelector: '#az-colored, #az-colored path, #az-colored rect, #az-colored text, #ar-colored line, .az-mobile-piece, .az-mobile-click',
        stateDimmed: '#az-dimmed',
        stateModal: 'az-modal',
        stateColor: 'pending-state',
        stateTitle: 'Arizona',
        stateContent: '<p>In 2019, Arizona as proposed a bill that would allow for recognized tribes to accept sports bets, with the exception of bets on NCAA games.</p>',
        stateMobilePiece: 'images/mobile/arizona-mobile-piece.png',
        stateMobileBg: 'az-slide'
      },

      // AR - Arkansas
      arkansas: {
        stateSelector: '#ar-colored, #ar-colored path, #ar-colored rect, #ar-colored text, #ar-colored line, .ar-mobile-piece, .ar-mobile-click',
        stateDimmed: '#ar-dimmed',
        stateModal: 'ar-modal',
        stateColor: 'legal-state',
        stateTitle: 'Arkansas',
        stateContent: '<p>The sports gambling scene is heating up in Arkansas. The first bet sportsbook took a bet on July 1, 2019, and many additional sportsbooks are currently in development.</p>',
        stateMobilePiece: 'images/mobile/arkansas-mobile-piece.png',
        stateMobileBg: 'ar-slide'
      },

      // CA - California
      california: {
        stateSelector: '#ca-colored, #ca-colored path, #ca-colored rect, #ca-colored text, #ca-colored line, .ca-mobile-piece',
        stateDimmed: '#ca-dimmed',
        stateModal: 'ca-modal',
        stateColor: 'pending-state',
        stateTitle: 'California',
        stateContent: '<p>Before legalizing sports betting, California would like to first amend their constitution to reflect this new proposal. There is also a referendum that could legalize sports betting pending voter approval in 2020.</p>',
        stateMobilePiece: 'images/mobile/california-mobile-piece.png',
        stateMobileBg: 'ca-slide'
      },

      // CO - Colorado
      colorado: {
        stateSelector: '#co-colored, #co-colored path, #co-colored rect, #co-colored text, #co-colored line, .co-mobile-piece',
        stateDimmed: '#co-dimmed',
        stateModal: 'co-modal',
        stateColor: 'pending-state',
        stateTitle: 'Colorado',
        stateContent: '<p>Seven lawmakers worked together to introduce a bill that would decriminalize sports betting, as well as introduce a tax on all sports betting profits.</p>',
        stateMobilePiece: 'images/mobile/colorado-mobile-piece.png',
        stateMobileBg: 'co-slide'
      },

      // CT - Connecticut
      connecticut: {
        stateSelector: '#ct-colored, #ct-colored path, #ct-colored rect, #ct-colored text, #ct-colored line, .ct-mobile-piece',
        stateDimmed: '#ct-dimmed',
        stateModal: 'ct-modal',
        stateColor: 'pending-state',
        stateTitle: 'Connecticut',
        stateContent: '<p>A bill focused on legalizing sports wagering was introduced in early 2019, but since then there has been little movement forward.</p>',
        stateMobilePiece: 'images/mobile/connecticut-mobile-piece.png',
        stateMobileBg: 'ct-slide'
      },

      // DE - Delaware
      delaware: {
        stateSelector: '#de-colored, #de-colored path, #de-colored rect, #de-colored text, #de-colored line, .de-mobile-piece',
        stateDimmed: '#de-dimmed',
        stateModal: 'de-modal',
        stateColor: 'legal-state',
        stateTitle: 'Delaware',
        stateContent: '<p>Delaware has permitted single-game sports gambling at 3 casinos in the state since June 5, 2018, and an expansion to online sports betting is expected to be legalized soon.<p>',
        stateMobilePiece: 'images/mobile/delaware-mobile-piece.png',
        stateMobileBg: 'de-slide'
      },

      // FL - Florida
      florida: {
        stateSelector: '#fl-colored, #fl-colored path, #fl-colored rect, #fl-colored text, #fl-colored line, .fl-mobile-piece',
        stateDimmed: '#fl-dimmed',
        stateModal: 'fl-modal',
        stateColor: 'not-legal-state',
        stateTitle: 'Florida',
        stateContent: '<p>The sunshine state does not have a bright future when it comes to legalizing sports betting, with no bills introduced at this time.</p>',
        stateMobilePiece: 'images/mobile/florida-mobile-piece.png',
        stateMobileBg: 'fl-slide'
      },

      // GA - Georgia
      georgia: {
        stateSelector: '#ga-colored, #ga-colored path, #ga-colored rect, #ga-colored text, #ga-colored line, .ga-mobile-piece',
        stateDimmed: '#ga-dimmed',
        stateModal: 'ga-modal',
        stateColor: 'pending-state',
        stateTitle: 'Georgia',
        stateContent: '<p>A 2019 bill was introduced that would allow for sports betting and would appoint a sports betting director to oversee and regulate sports betting.</p>',
        stateMobilePiece: 'images/mobile/georgia-mobile-piece.png',
        stateMobileBg: 'ga-slide'
      },

      // HI - Hawaii
      hawaii: {
        stateSelector: '#hi-colored, #hi-colored path, #hi-colored rect, #hi-colored text, #hi-colored line, .hi-mobile-piece',
        stateDimmed: '#hi-dimmed',
        stateModal: 'hi-modal',
        stateColor: 'pending-state',
        stateTitle: 'Hawaii',
        stateContent: '<p>Hawaii aims to create a Hawaii Sports Wagering Corporation to regulate sports betting, and is unlikely to move forward until this corporation is formed.</p>',
        stateMobilePiece: 'images/mobile/hawaii-mobile-piece.png',
        stateMobileBg: 'hi-slide'
      },

      // ID - Idaho
      idaho: {
        stateSelector: '#id-colored, #id-colored path, #id-colored rect, #id-colored text, #id-colored line, .id-mobile-piece',
        stateDimmed: '#id-dimmed',
        stateModal: 'id-modal',
        stateColor: 'not-legal-state',
        stateTitle: 'Idaho',
        stateContent: '<p>Idaho has had no proposed sports gambling bills or law, making prompt legalization unlikely.</p>',
        stateMobilePiece: 'images/mobile/idaho-mobile-piece.png',
        stateMobileBg: 'id-slide'
      },

      // IL - Illinois
      illinois: {
        stateSelector: '#il-colored, #il-colored path, #il-colored rect, #il-colored text, #il-colored line, .il-mobile-piece',
        stateDimmed: '#il-dimmed',
        stateModal: 'il-modal',
        stateColor: 'almost-legal-state',
        stateTitle: 'Illinois',
        stateContent: '<p>Illinois expects to start taking sports bets by the end of 2019. Sports betting was legalized on June 2, 2019, with betting sites coming to Wrigley Field soon.</p>',
        stateMobilePiece: 'images/mobile/illinois-mobile-piece.png',
        stateMobileBg: 'il-slide'
      },

      // IN - Indiana
      indiana: {
        stateSelector: '#in-colored, #in-colored path, #in-colored rect, #in-colored text, #in-colored line, .in-mobile-piece',
        stateDimmed: '#in-dimmed',
        stateModal: 'in-modal',
        stateColor: 'almost-legal-state',
        stateTitle: 'Indiana',
        stateContent: '<p>On September 1, 2019, sports betting was legalized with some restrictions, including the inability to wager on esports and high school sports, as well as for colleges or leagues to prohibit wagers at the location of a sporting event.</p>',
        stateMobilePiece: 'images/mobile/indiana-mobile-piece.png',
        stateMobileBg: 'in-slide'
      },

      // IA - Iowa
      iowa: {
        stateSelector: '#ia-colored, #ia-colored path, #ia-colored rect, #ia-colored text, #ia-colored line, .ia-mobile-piece',
        stateDimmed: '#ia-dimmed',
        stateModal: 'ia-modal',
        stateColor: 'legal-state',
        stateTitle: 'Iowa',
        stateContent: '<p>Iowa starting taking sports wagers on August 15, 2019, allowing for bets both at a casino and online, as long as the bet is not an in-game prop bet on a college game.</p>',
        stateMobilePiece: 'images/mobile/iowa-mobile-piece.png',
        stateMobileBg: 'ia-slide'
      },

      // KS - Kansas
      kansas: {
        stateSelector: '#ks-colored, #ks-colored path, #ks-colored rect, #ks-colored text, #ks-colored line, .ks-mobile-piece',
        stateDimmed: '#ks-dimmed',
        stateModal: 'ks-modal',
        stateColor: 'pending-state',
        stateTitle: 'Kansas',
        stateContent: '<p>Kansas held sports betting hearings in 2018, but after the proceedings concluded, no further action was taken, aside from the introduction of a new bill in January 2019.</p>',
        stateMobilePiece: 'images/mobile/kansas-mobile-piece.png',
        stateMobileBg: 'ks-slide'
      },

      // KY - Kentucky
      kentucky: {
        stateSelector: '#ky-colored, #ky-colored path, #ky-colored rect, #ky-colored text, #ky-colored line, .ky-mobile-piece',
        stateDimmed: '#ky-dimmed',
        stateModal: 'ky-modal',
        stateColor: 'pending-state',
        stateTitle: 'Kentucky',
        stateContent: '<p>As early as June of 2017, Kentucky introduced a bill that would allow betting on college and pro sports. The bill has still not passed, with two additional bills introduced in January of 2019.</p>',
        stateMobilePiece: 'images/mobile/kentucky-mobile-piece.png',
        stateMobileBg: 'ky-slide'
      },

      // LA - Louisiana
      louisiana: {
        stateSelector: '#la-colored, #la-colored path, #la-colored rect, #la-colored text, #la-colored line, .la-mobile-piece',
        stateDimmed: '#la-dimmed',
        stateModal: 'la-modal',
        stateColor: 'pending-state',
        stateTitle: 'Louisiana',
        stateContent: '<p>A proposed 2018 bill that would allow sports betting at horse racing venues has not gained much traction at this point.</p>',
        stateMobilePiece: 'images/mobile/louisiana-mobile-piece.png',
        stateMobileBg: 'la-slide'
      },

      // ME - Maine
      maine: {
        stateSelector: '#me-colored, #me-colored path, #me-colored rect, #me-colored text, #me-colored line, .me-mobile-piece',
        stateDimmed: '#me-dimmed',
        stateModal: 'me-modal',
        stateColor: 'pending-state',
        stateTitle: 'Maine',
        stateContent: '<p>Lawmakers passed a bill in June of 2019 that would have started the process of legalizing sports betting, but the bill was vetoed by the governor.</p>',
        stateMobilePiece: 'images/mobile/maine-mobile-piece.png',
        stateMobileBg: 'me-slide'
      },

      // MD - Maryland
      maryland: {
        stateSelector: '#md-colored, #md-colored path, #md-colored rect, #md-colored text, #md-colored line, .md-mobile-piece',
        stateDimmed: '#md-dimmed',
        stateModal: 'md-modal',
        stateColor: 'pending-state',
        stateTitle: 'Maryland',
        stateContent: '<p>In February of 2018, a bill was introduced to investigate the idea of legalizing sports betting, but the bill did not move forward, and there has been little activity since.</p>',
        stateMobilePiece: 'images/mobile/maryland-mobile-piece.png',
        stateMobileBg: 'md-slide'
      },

      // MA - Massachusetts
      massachusetts: {
        stateSelector: '#ma-colored, #ma-colored path, #ma-colored rect, #ma-colored text, #ma-colored line, .ma-mobile-piece',
        stateDimmed: '#ma-dimmed',
        stateModal: 'ma-modal',
        stateColor: 'pending-state',
        stateTitle: 'Massachusetts',
        stateContent: '<p>Massachusetts has introduced bills to legalize sports betting in November 2018 and January 2019, and there is still hope that those bills can soon be made into laws.</p>',
        stateMobilePiece: 'images/mobile/massachusetts-mobile-piece.png',
        stateMobileBg: 'ma-slide'
      },

      // MN - Minnesota
      minnesota: {
        stateSelector: '#mn-colored, #mn-colored path, #mn-colored rect, #mn-colored text, #mn-colored line, .mn-mobile-piece',
        stateDimmed: '#mn-dimmed',
        stateModal: 'mn-modal',
        stateColor: 'pending-state',
        stateTitle: 'Minnesota',
        stateContent: '<p>A bill that would introduce mobile sports gambling, other sports wagering, and an oversight committee was drafted in April of 2018, with no action since.</p>',
        stateMobilePiece: 'images/mobile/minnesota-mobile-piece.png',
        stateMobileBg: 'mn-slide'
      },

      // MS - Mississippi
      mississippi: {
        stateSelector: '#ms-colored, #ms-colored path, #ms-colored rect, #ms-colored text, #ms-colored line, .ms-mobile-piece',
        stateDimmed: '#ms-dimmed',
        stateModal: 'ms-modal',
        stateColor: 'legal-state',
        stateTitle: 'Mississippi',
        stateContent: '<p>On August 1, 2018, the first sports bet was placed in Mississippi. For now, wagers can only be placed in person, but the hope is that online betting will be implemented soon.</p>',
        stateMobilePiece: 'images/mobile/mississippi-mobile-piece.png',
        stateMobileBg: 'ms-slide'
      },

      // MO - Missouri
      missouri: {
        stateSelector: '#mo-colored, #mo-colored path, #mo-colored rect, #mo-colored text, #mo-colored line, .mo-mobile-piece',
        stateDimmed: '#mo-dimmed',
        stateModal: 'mo-modal',
        stateColor: 'pending-state',
        stateTitle: 'Missouri',
        stateContent: '<p>Missouri originally wanted to allow sports betting on riverboat casinos, but that  January 2018 proposal did not find much support. New bills were introduced a year later, with similar results.</p>',
        stateMobilePiece: 'images/mobile/missouri-mobile-piece.png',
        stateMobileBg: 'mo-slide'
      },

      // MI - Michigan
      michigan: {
        stateSelector: '#mi-colored, #mi-colored path, #mi-colored rect, #mi-colored text, #mi-colored line, .mi-mobile-piece',
        stateDimmed: '#mi-dimmed',
        stateModal: 'mi-modal',
        stateColor: 'pending-state',
        stateTitle: 'Michigan',
        stateContent: '<p>Michigan’s legislature approved a law that would allow casinos to accept sports wagers, but the law was vetoed by the governor.</p>',
        stateMobilePiece: 'images/mobile/michigan-mobile-piece.png',
        stateMobileBg: 'mi-slide'
      },

      // MT - Montana
      montana: {
        stateSelector: '#mt-colored, #mt-colored path, #mt-colored rect, #mt-colored text, #mt-colored line, .mt-mobile-piece',
        stateDimmed: '#mt-dimmed',
        stateModal: 'mt-modal',
        stateColor: 'almost-legal-state',
        stateTitle: 'Montana',
        stateContent: '<p>Montana - On May 3, 2019, sports wagering was legalized. However, the only currently available gambling is via the lottery, with sports betting likely to be introduced near the end of 2019.</p>',
        stateMobilePiece: 'images/mobile/montana-mobile-piece.png',
        stateMobileBg: 'mt-slide'
      },

      // NE - Nebraska
      nebraska: {
        stateSelector: '#ne-colored, #ne-colored path, #ne-colored rect, #ne-colored text, #ne-colored line, .ne-mobile-piece',
        stateDimmed: '#ne-dimmed',
        stateModal: 'ne-modal',
        stateColor: 'not-legal-state',
        stateTitle: 'Nebraska',
        stateContent: '<p>Nebraska has been reluctant to embrace sports betting, with no proposed bills at this point.</p>',
        stateMobilePiece: 'images/mobile/nebraska-mobile-piece.png',
        stateMobileBg: 'ne-slide'
      },

      // NV - Nevada
      nevada: {
        stateSelector: '#nv-colored, #nv-colored path, #nv-colored rect, #nv-colored text, #nv-colored line, .nv-mobile-piece',
        stateDimmed: '#nv-dimmed',
        stateModal: 'nv-modal',
        stateColor: 'legal-state',
        stateTitle: 'Nevada',
        stateContent: '<p>Sports betting has been legal in Nevada for decades, making it an industry leader and pioneer.</p>',
        stateMobilePiece: 'images/mobile/nevada-mobile-piece.png',
        stateMobileBg: 'nv-slide'
      },

      // NH - New Hampshire
      newHampshire: {
        stateSelector: '#nh-colored, #nh-colored path, #nh-colored rect, #nh-colored text, #nh-colored line, .nh-mobile-piece',
        stateDimmed: '#nh-dimmed',
        stateModal: 'nh-modal',
        stateColor: 'almost-legal-state',
        stateTitle: 'New Hampshire',
        stateContent: '<p>New Hampshire legalized sports betting on June 19, 2019, but is currently still in the process of reviewing 13 applicants for the sports betting program. Unlike other states, New Hampshire requires bettors to be only 18 years old.</p>',
        stateMobilePiece: 'images/mobile/new-hampshire-mobile-piece.png',
        stateMobileBg: 'nh-slide'
      },

      // NJ - New Jersey
      newJersey: {
        stateSelector: '#nj-colored, #nj-colored path, #nj-colored rect, #nj-colored text, #nj-colored line, .nj-mobile-piece',
        stateDimmed: '#nj-dimmed',
        stateModal: 'nj-modal',
        stateColor: 'legal-state',
        stateTitle: 'New Jersey',
        stateContent: '<p>New Jersey legalized sports betting on June 11, 2018, with sports bets quickly being placed at Atlantic City casinos, as well as the opening of a sportsbook in the same complex as the home of the Jets and Giants.</p>',
        stateMobilePiece: 'images/mobile/new-jersey-mobile-piece.png',
        stateMobileBg: 'nj-slide'
      },

      // NM - New Mexico
      newMexico: {
        stateSelector: '#nm-colored, #nm-colored path, #nm-colored rect, #nm-colored text, #nm-colored line, .nm-mobile-piece',
        stateDimmed: '#nm-dimmed',
        stateModal: 'nm-modal',
        stateColor: 'legal-state',
        stateTitle: 'New Mexico',
        stateContent: '<p>While New Mexico has not passed any new sports betting laws, there is a gaming compact that has allowed sports betting in the state since October 16, 2018. One caveat is that no bets are allowed on games involving the University of New Mexico or New Mexico State University.</p>',
        stateMobilePiece: 'images/mobile/new-mexico-mobile-piece.png',
        stateMobileBg: 'nm-slide'
      },

      // NY - New York
      newYork: {
        stateSelector: '#ny-colored, #ny-colored path, #ny-colored rect, #ny-colored text, #ny-colored line, .ny-mobile-piece',
        stateDimmed: '#ny-dimmed',
        stateModal: 'ny-modal',
        stateColor: 'legal-state',
        stateTitle: 'New York',
        stateContent: '<p>New York passed a law to allow sports betting at four upstate locations all the way back in 2013, but it took until July 16, 2019, for the first bet to be placed.</p>',
        stateMobilePiece: 'images/mobile/new-york-mobile-piece.png',
        stateMobileBg: 'ny-slide'
      },

      // NC - North Carolina
      northCarolina: {
        stateSelector: '#nc-colored, #nc-colored path, #nc-colored rect, #nc-colored text, #nc-colored line, .nc-mobile-piece',
        stateDimmed: '#nc-dimmed',
        stateModal: 'nc-modal',
        stateColor: 'almost-legal-state',
        stateTitle: 'North Carolina',
        stateContent: '<p>Sports bets can be placed only on tribal grounds, according to a law signed on July 26, 2019. However, lawmakers are considering expanding to statewide sports betting.</p>',
        stateMobilePiece: 'images/mobile/north-carolina-mobile-piece.png',
        stateMobileBg: 'nc-slide'
      },

      // ND - North Dakota
      northDakota: {
        stateSelector: '#nd-colored, #nd-colored path, #nd-colored rect, #nd-colored text, #nd-colored line, .nd-mobile-piece',
        stateDimmed: '#nd-dimmed',
        stateModal: 'nd-modal',
        stateColor: 'not-legal-state',
        stateTitle: 'North Dakota',
        stateContent: '<p>A bill introduced in January 2019 would legalize sports betting, but little progress has been made towards legalization.</p>',
        stateMobilePiece: 'images/mobile/north-dakota-mobile-piece.png',
        stateMobileBg: 'nd-slide'
      },

      // OH - Ohio
      ohio: {
        stateSelector: '#oh-colored, #oh-colored path, #oh-colored rect, #oh-colored text, #oh-colored line, .oh-mobile-piece',
        stateDimmed: '#oh-dimmed',
        stateModal: 'oh-modal',
        stateColor: 'pending-state',
        stateTitle: 'Ohio',
        stateContent: '<p>Mark this state as TBD, as the only current progress towards legalization is a bill that states Ohio intends to develop legislation to legalize sports betting eventually.</p>',
        stateMobilePiece: 'images/mobile/ohio-mobile-piece.png',
        stateMobileBg: 'oh-slide'
      },

      // OK - Oklahoma
      oklahoma: {
        stateSelector: '#ok-colored, #ok-colored path, #ok-colored rect, #ok-colored text, #ok-colored line, .ok-mobile-piece',
        stateDimmed: '#ok-dimmed',
        stateModal: 'ok-modal',
        stateColor: 'pending-state',
        stateTitle: 'Oklahoma',
        stateContent: '<p>There has currently been no action on a proposed bill that would legalize sports gambling in Oklahoma.</p>',
        stateMobilePiece: 'images/mobile/oklahoma-mobile-piece.png',
        stateMobileBg: 'ok-slide'
      },

      // OR - Oregon
      oregon: {
        stateSelector: '#or-colored, #or-colored path, #or-colored rect, #or-colored text, #or-colored line, .or-mobile-piece',
        stateDimmed: '#or-dimmed',
        stateModal: 'or-modal',
        stateColor: 'legal-state',
        stateTitle: 'Oregon',
        stateContent: '<p>Oregon has long had laws in place that allow for some type of sports betting, so no new law needed to be proposed to allow for the return of legal betting on August 27, 2019.</p>',
        stateMobilePiece: 'images/mobile/oregon-mobile-piece.png',
        stateMobileBg: 'or-slide'
      },

      // PA - Pennsylvania
      pennsylvania: {
        stateSelector: '#pa-colored, #pa-colored path, #pa-colored rect, #pa-colored text, #pa-colored line, .pa-mobile-piece',
        stateDimmed: '#pa-dimmed',
        stateModal: 'pa-modal',
        stateColor: 'legal-state',
        stateTitle: 'Pennsylvania',
        stateContent: '<p>An October 2017 bill legalized sports betting, but the first legal sports bet was not placed until over a year later, in November of 2018.</p>',
        stateMobilePiece: 'images/mobile/pennsylvania-mobile-piece.png',
        stateMobileBg: 'pa-slide'
      },

      // RI - Rhode Island
      rhodeIsland: {
        stateSelector: '#ri-colored, #ri-colored path, #ri-colored rect, #ri-colored text, #ri-colored line, .ri-mobile-piece',
        stateDimmed: '#ri-dimmed',
        stateModal: 'ri-modal',
        stateColor: 'legal-state',
        stateTitle: 'Rhode Island',
        stateContent: '<p>Rhode Island began taking sports bets in November of 2018, although the law currently only allows sports betting at two locations in the state, or via mobile betting.</p>',
        stateMobilePiece: 'images/mobile/rhode-island-mobile-piece.png',
        stateMobileBg: 'ri-slide'
      },

      // SC - South Carolina
      southCarolina: {
        stateSelector: '#sc-colored, #sc-colored path, #sc-colored rect, #sc-colored text, #sc-colored line, .sc-mobile-piece',
        stateDimmed: '#sc-dimmed',
        stateModal: 'sc-modal',
        stateColor: 'pending-state',
        stateTitle: 'South Carolina',
        stateContent: '<p>South Carolina is trying to legalize sports betting on professional sports through a 2017 bill (and then a new 2019 bill), but it is still pending approval.</p>',
        stateMobilePiece: 'images/mobile/south-carolina-mobile-piece.png',
        stateMobileBg: 'sc-slide'
      },

      // SD - South Dakota
      southDakota: {
        stateSelector: '#sd-colored, #sd-colored path, #sd-colored rect, #sd-colored text, #sd-colored line, .sd-mobile-piece',
        stateDimmed: '#sd-dimmed',
        stateModal: 'sd-modal',
        stateColor: 'pending-state',
        stateTitle: 'South Dakota',
        stateContent: '<p>There is a proposed constitutional amendment that would allow the voters of South Dakota to decide if sports gambling should be legalized in 2020.</p>',
        stateMobilePiece: 'images/mobile/south-dakota-mobile-piece.png',
        stateMobileBg: 'sd-slide'
      },

      // TN - Tennessee
      tennessee: {
        stateSelector: '#tn-colored, #tn-colored path, #tn-colored rect, #tn-colored text, #tn-colored line, .tn-mobile-piece',
        stateDimmed: '#tn-dimmed',
        stateModal: 'tn-modal',
        stateColor: 'almost-legal-state',
        stateTitle: 'Tennessee',
        stateContent: '<p>Online and mobile sports betting has been legal since May 25, 2019, but at this juncture, no movement has been made to implement sports betting in Tennessee.</p>',
        stateMobilePiece: 'images/mobile/tennessee-mobile-piece.png',
        stateMobileBg: 'tn-slide'
      },

      // TX - Texas
      texas: {
        stateSelector: '#tx-colored, #tx-colored path, #tx-colored rect, #tx-colored text, #tx-colored line, .tx-mobile-piece',
        stateDimmed: '#tx-dimmed',
        stateModal: 'tx-modal',
        stateColor: 'pending-state',
        stateTitle: 'Texas',
        stateContent: '<p>In February of 2019, a bill was introduced to legalize sports betting that would include a 6.25% tax on each bet placed.</p>',
        stateMobilePiece: 'images/mobile/texas-mobile-piece.png',
        stateMobileBg: 'tx-slide'
      },

      // UT - Utah
      utah: {
        stateSelector: '#ut-colored, #ut-colored path, #ut-colored rect, #ut-colored text, #ut-colored line, .ut-mobile-piece',
        stateDimmed: '#ut-dimmed',
        stateModal: 'ut-modal',
        stateColor: 'not-legal-state',
        stateTitle: 'Utah',
        stateContent: '<p>Utah is the least likely state to allow legal sports betting, as it has anti-gambling laws in its state constitution and has resisted all other forms of gambling in the past.</p>',
        stateMobilePiece: 'images/mobile/utah-mobile-piece.png',
        stateMobileBg: 'ut-slide'
      },

      // VT - Vermont
      vermont: {
        stateSelector: '#vt-colored, #vt-colored path, #vt-colored rect, #vt-colored text, #vt-colored line, .vt-mobile-piece',
        stateDimmed: '#vt-dimmed',
        stateModal: 'vt-modal',
        stateColor: 'pending-state',
        stateTitle: 'Vermont',
        stateContent: '<p>A February 2019 proposed bill would allow for mobile betting in Vermont, as long as the better is physically located in the state.</p>',
        stateMobilePiece: 'images/mobile/vermont-mobile-piece.png',
        stateMobileBg: 'vt-slide'
      },

      // VA - Virginia
      virginia: {
        stateSelector: '#va-colored, #va-colored path, #va-colored rect, #va-colored text, #va-colored line, .va-mobile-piece',
        stateDimmed: '#va-dimmed',
        stateModal: 'va-modal',
        stateColor: 'legal-state',
        stateTitle: 'Virginia',
        stateContent: '<p>Sports betting has been legal in Nevada for decades, making it an industry leader and pioneer.</p>',
        stateMobilePiece: 'images/mobile/virginia-mobile-piece.png',
        stateMobileBg: 'va-slide'
      },

      // WA - Washington
      washington: {
        stateSelector: '#wa-colored, #wa-colored path, #wa-colored rect, #wa-colored text, #wa-colored line, .wa-mobile-piece',
        stateDimmed: '#wa-dimmed',
        stateModal: 'wa-modal',
        stateColor: 'pending-state',
        stateTitle: 'Washington',
        stateContent: '<p>There are two proposed sports betting bills introduced in February of 2019. One restricts sports bets to tribal casinos, while the other restricts sports bets to horse racing tracks.</p>',
        stateMobilePiece: 'images/mobile/washington-mobile-piece.png',
        stateMobileBg: 'wa-slide'
      },

      // WV - West Virginia
      westVirginia: {
        stateSelector: '#wv-colored, #wv-colored path, #wv-colored rect, #wv-colored text, #wv-colored line, .wv-mobile-piece',
        stateDimmed: '#wv-dimmed',
        stateModal: 'wv-modal',
        stateColor: 'legal-state',
        stateTitle: 'West Virginia',
        stateContent: '<p>West Virginia allows both online and in-person sports betting as of August 30, 2018, making it the fifth state to approve of sports gambling.</p>',
        stateMobilePiece: 'images/mobile/west-virginia-mobile-piece.png',
        stateMobileBg: 'wv-slide'
      },

      // WI - Wisconsin
      wisconsin: {
        stateSelector: '#wi-colored, #wi-colored path, #wi-colored rect, #wi-colored text, #wi-colored line, .wi-mobile-piece',
        stateDimmed: '#wi-dimmed',
        stateModal: 'wi-modal',
        stateColor: 'not-legal-state',
        stateTitle: 'Wisconsin',
        stateContent: '<p>No bills or laws have been proposed to legalize sports betting in Wisconsin.</p>',
        stateMobilePiece: 'images/mobile/wisconsin-mobile-piece.png',
        stateMobileBg: 'wi-slide'
      },

      // WY - Wyoming
      wyoming: {
        stateSelector: '#wy-colored, #wy-colored path, #wy-colored rect, #wy-colored text, #wy-colored line, .wy-mobile-piece',
        stateDimmed: '#wy-dimmed',
        stateModal: 'wy-modal',
        stateColor: 'not-legal-state',
        stateTitle: 'Wyoming',
        stateContent: '<p>Wyoming has not made any moves to legalize sports betting in the state, as no legislation has been introduced at this time.</p>',
        stateMobilePiece: 'images/mobile/wyoming-mobile-piece.png',
        stateMobileBg: 'wy-slide'
      }
    }

    // AL - Alabama
    $(mapDictionary.alabama.stateSelector).on({

        mouseenter: function(e) {

          $(mapDictionary.dimmedPiece).not(mapDictionary.alabama.stateDimmed).addClass(mapDictionary.dimElementHover);

        },
        mouseleave: function(e){

          $(mapDictionary.dimmedPiece).not(mapDictionary.alabama.stateDimmed).removeClass(mapDictionary.dimElementHover);

        },
        click: function(e) {

          e.preventDefault();

          // Mobile
          $(mapDictionary.stateMobileCarousel).attr('class', mapDictionary.alabama.stateMobileBg);

          $(mapDictionary.stateMobileSwap).attr('src', mapDictionary.alabama.stateMobilePiece);

          $(mapDictionary.stateMobileContent).html(mapDictionary.alabama.stateContent);

          $(mapDictionary.dimmedPiece).not(mapDictionary.alabama.stateDimmed).addClass(mapDictionary.dimElementClick);

          $(mapDictionary.modalId).modal(
          {
            backdrop: false,
            keyboard: true
          });

          $(mapDictionary.modalId).addClass(mapDictionary.alabama.stateModal);

          // Call Map Dictionary

          // Title
          $(mapDictionary.modalTitle).html(mapDictionary.alabama.stateTitle);

          // Background
          $(mapDictionary.stateModalColor).attr('class', mapDictionary.alabama.stateColor);

          // Description
          $(mapDictionary.modalBody).html(mapDictionary.alabama.stateContent);

          $(mapDictionary.modalClose).on('click', function(e) {

            e.preventDefault();

            $(mapDictionary.modalId).removeClass(mapDictionary.alabama.stateModal);
            $(mapDictionary.stateModalColor).removeClass(mapDictionary.alabama.stateColor);
            $(mapDictionary.dimmedPiece).not(mapDictionary.alabama.stateDimmed).removeClass(mapDictionary.dimElementClick);

          });


        }
      });

    // AK - Alaska
    $(mapDictionary.alaska.stateSelector).on({

          mouseenter: function(e) {

            $(mapDictionary.dimmedPiece).not(mapDictionary.alaska.stateDimmed).addClass(mapDictionary.dimElementHover);

          },
          mouseleave: function(e){

            $(mapDictionary.dimmedPiece).not(mapDictionary.alaska.stateDimmed).removeClass(mapDictionary.dimElementHover);

          },
          click: function(e) {

            e.preventDefault();

            // Mobile
            $(mapDictionary.stateMobileCarousel).attr('class', mapDictionary.alaska.stateMobileBg);

            $(mapDictionary.stateMobileSwap).attr('src', mapDictionary.alaska.stateMobilePiece);

            $(mapDictionary.stateMobileContent).html(mapDictionary.alaska.stateContent);

            $(mapDictionary.dimmedPiece).not(mapDictionary.alaska.stateDimmed).addClass(mapDictionary.dimElementClick);

            $(mapDictionary.modalId).modal(
            {
              backdrop: false,
              keyboard: true
            });

            $(mapDictionary.modalId).addClass(mapDictionary.alaska.stateModal);

            // Call Map Dictionary

            // Title
            $(mapDictionary.modalTitle).html(mapDictionary.alaska.stateTitle);

            // Background
            $(mapDictionary.stateModalColor).attr('class', mapDictionary.alaska.stateColor);

            // Description
            $(mapDictionary.modalBody).html(mapDictionary.alaska.stateContent);

            $(mapDictionary.modalClose).on('click', function(e) {

                $(mapDictionary.modalId).removeClass(mapDictionary.alaska.stateModal);
                $(mapDictionary.stateModalColor).removeClass(mapDictionary.alaska.stateColor);
                // $(mapDictionary.dimmedPiece).not(mapDictionary.alaska.stateDimmed).removeClass(mapDictionary.dimElementClick);

            });

          }
        });

    // AZ - Arizona
    $(mapDictionary.arizona.stateSelector).on({

        mouseenter: function(e) {

          $(mapDictionary.dimmedPiece).not(mapDictionary.arizona.stateDimmed).addClass(mapDictionary.dimElementHover);

        },
        mouseleave: function(e){

          $(mapDictionary.dimmedPiece).not(mapDictionary.arizona.stateDimmed).removeClass(mapDictionary.dimElementHover);

        },
        click: function(e) {

          e.preventDefault();

          // Mobile
          $(mapDictionary.stateMobileCarousel).attr('class', mapDictionary.arizona.stateMobileBg);

          $(mapDictionary.stateMobileSwap).attr('src', mapDictionary.arizona.stateMobilePiece);

          $(mapDictionary.stateMobileContent).html(mapDictionary.arizona.stateContent);

          $(mapDictionary.dimmedPiece).not(mapDictionary.arizona.stateDimmed).addClass(mapDictionary.dimElementClick);

          $(mapDictionary.modalId).modal(
          {
            backdrop: false,
            keyboard: true
          });

          $(mapDictionary.modalId).addClass(mapDictionary.arizona.stateModal);

          // Call Map Dictionary

          // Title
          $(mapDictionary.modalTitle).html(mapDictionary.arizona.stateTitle);

          // Background
          $(mapDictionary.stateModalColor).attr('class', mapDictionary.arizona.stateColor);

          // Description
          $(mapDictionary.modalBody).html(mapDictionary.arizona.stateContent);

          $(mapDictionary.modalClose).on('click', function(e) {

              $(mapDictionary.modalId).removeClass(mapDictionary.arizona.stateModal);
              $(mapDictionary.stateModalColor).removeClass(mapDictionary.arizona.stateColor);
              $(mapDictionary.dimmedPiece).not(mapDictionary.arizona.stateDimmed).removeClass(mapDictionary.dimElementClick);

          });

        }
      });

    // AR - Arkansas
    $(mapDictionary.arkansas.stateSelector).on({

        mouseenter: function(e) {

          $(mapDictionary.dimmedPiece).not(mapDictionary.arkansas.stateDimmed).addClass(mapDictionary.dimElementHover);

        },
        mouseleave: function(e){

          $(mapDictionary.dimmedPiece).not(mapDictionary.arkansas.stateDimmed).removeClass(mapDictionary.dimElementHover);

        },
        click: function(e) {

          e.preventDefault();

          // Mobile
          $(mapDictionary.stateMobileCarousel).attr('class', mapDictionary.arkansas.stateMobileBg);

          $(mapDictionary.stateMobileSwap).attr('src', mapDictionary.arkansas.stateMobilePiece);

          $(mapDictionary.stateMobileContent).html(mapDictionary.arkansas.stateContent);

          $(mapDictionary.dimmedPiece).not(mapDictionary.arkansas.stateDimmed).addClass(mapDictionary.dimElementClick);

          $(mapDictionary.modalId).modal(
          {
            backdrop: false,
            keyboard: true
          });

          $(mapDictionary.modalId).addClass(mapDictionary.arkansas.stateModal);

          // Call Map Dictionary

          // Title
          $(mapDictionary.modalTitle).html(mapDictionary.arkansas.stateTitle);

          // Background
          $(mapDictionary.stateModalColor).attr('class', mapDictionary.arkansas.stateColor);

          // Description
          $(mapDictionary.modalBody).html(mapDictionary.arkansas.stateContent);

          $(mapDictionary.modalClose).on('click', function(e) {

              $(mapDictionary.modalId).removeClass(mapDictionary.arkansas.stateModal);
              $(mapDictionary.stateModalColor).removeClass(mapDictionary.arkansas.stateColor);
              $(mapDictionary.dimmedPiece).not(mapDictionary.arkansas.stateDimmed).removeClass(mapDictionary.dimElementClick);

          });

        }
      });

    // CA - California
    $(mapDictionary.california.stateSelector).on({

        mouseenter: function(e) {

          $(mapDictionary.dimmedPiece).not(mapDictionary.california.stateDimmed).addClass(mapDictionary.dimElementHover);

        },
        mouseleave: function(e){

          $(mapDictionary.dimmedPiece).not(mapDictionary.california.stateDimmed).removeClass(mapDictionary.dimElementHover);

        },
        click: function(e) {

          e.preventDefault();

          // Mobile
          $(mapDictionary.stateMobileCarousel).attr('class', mapDictionary.california.stateMobileBg);

          $(mapDictionary.stateMobileSwap).attr('src', mapDictionary.california.stateMobilePiece);

          $(mapDictionary.stateMobileContent).html(mapDictionary.california.stateContent);

          $(mapDictionary.dimmedPiece).not(mapDictionary.california.stateDimmed).addClass(mapDictionary.dimElementClick);

          $(mapDictionary.modalId).modal(
          {
            backdrop: false,
            keyboard: true
          });

          $(mapDictionary.modalId).addClass(mapDictionary.california.stateModal);

          // Call Map Dictionary

          // Title
          $(mapDictionary.modalTitle).html(mapDictionary.california.stateTitle);

          // Background
          $(mapDictionary.stateModalColor).attr('class', mapDictionary.california.stateColor);

          // Description
          $(mapDictionary.modalBody).html(mapDictionary.california.stateContent);

          $(mapDictionary.modalClose).on('click', function(e) {

              $(mapDictionary.modalId).removeClass(mapDictionary.california.stateModal);
              $(mapDictionary.stateModalColor).removeClass(mapDictionary.california.stateColor);
              $(mapDictionary.dimmedPiece).not(mapDictionary.california.stateDimmed).removeClass(mapDictionary.dimElementClick);

          });

        }
      });

    // CO - Colorado
    $(mapDictionary.colorado.stateSelector).on({

        mouseenter: function(e) {

          $(mapDictionary.dimmedPiece).not(mapDictionary.colorado.stateDimmed).addClass(mapDictionary.dimElementHover);

        },
        mouseleave: function(e){

          $(mapDictionary.dimmedPiece).not(mapDictionary.colorado.stateDimmed).removeClass(mapDictionary.dimElementHover);

        },
        click: function(e) {

          e.preventDefault();

          // Mobile
          $(mapDictionary.stateMobileCarousel).attr('class', mapDictionary.colorado.stateMobileBg);

          $(mapDictionary.stateMobileSwap).attr('src', mapDictionary.colorado.stateMobilePiece);

          $(mapDictionary.stateMobileContent).html(mapDictionary.colorado.stateContent);

          $(mapDictionary.dimmedPiece).not(mapDictionary.colorado.stateDimmed).addClass(mapDictionary.dimElementClick);

          $(mapDictionary.modalId).modal(
          {
            backdrop: false,
            keyboard: true
          });

          $(mapDictionary.modalId).addClass(mapDictionary.colorado.stateModal);

          // Call Map Dictionary

          // Title
          $(mapDictionary.modalTitle).html(mapDictionary.colorado.stateTitle);

          // Background
          $(mapDictionary.stateModalColor).attr('class', mapDictionary.colorado.stateColor);

          // Description
          $(mapDictionary.modalBody).html(mapDictionary.colorado.stateContent);

          $(mapDictionary.modalClose).on('click', function(e) {

              $(mapDictionary.modalId).removeClass(mapDictionary.colorado.stateModal);
              $(mapDictionary.stateModalColor).removeClass(mapDictionary.colorado.stateColor);
              $(mapDictionary.dimmedPiece).not(mapDictionary.colorado.stateDimmed).removeClass(mapDictionary.dimElementClick);

          });

        }
      });

    // CT - Connecticut
    $(mapDictionary.connecticut.stateSelector).on({

        mouseenter: function(e) {

          $(mapDictionary.dimmedPiece).not(mapDictionary.connecticut.stateDimmed).addClass(mapDictionary.dimElementHover);

        },
        mouseleave: function(e){

          $(mapDictionary.dimmedPiece).not(mapDictionary.connecticut.stateDimmed).removeClass(mapDictionary.dimElementHover);

        },
        click: function(e) {

          e.preventDefault();

          // Mobile
          $(mapDictionary.stateMobileCarousel).attr('class', mapDictionary.connecticut.stateMobileBg);

          $(mapDictionary.stateMobileSwap).attr('src', mapDictionary.connecticut.stateMobilePiece);

          $(mapDictionary.stateMobileContent).html(mapDictionary.connecticut.stateContent);

          $(mapDictionary.dimmedPiece).not(mapDictionary.connecticut.stateDimmed).addClass(mapDictionary.dimElementClick);

          $(mapDictionary.modalId).modal(
          {
            backdrop: false,
            keyboard: true
          });

          $(mapDictionary.modalId).addClass(mapDictionary.connecticut.stateModal);

          // Call Map Dictionary

          // Title
          $(mapDictionary.modalTitle).html(mapDictionary.connecticut.stateTitle);

          // Background
          $(mapDictionary.stateModalColor).attr('class', mapDictionary.connecticut.stateColor);

          // Description
          $(mapDictionary.modalBody).html(mapDictionary.connecticut.stateContent);

          $(mapDictionary.modalClose).on('click', function(e) {

              $(mapDictionary.modalId).removeClass(mapDictionary.connecticut.stateModal);
              $(mapDictionary.stateModalColor).removeClass(mapDictionary.connecticut.stateColor);
              $(mapDictionary.dimmedPiece).not(mapDictionary.connecticut.stateDimmed).removeClass(mapDictionary.dimElementClick);

          });

        }
      });

    // DE - Delaware
    $(mapDictionary.delaware.stateSelector).on({

        mouseenter: function(e) {

          $(mapDictionary.dimmedPiece).not(mapDictionary.delaware.stateDimmed).addClass(mapDictionary.dimElementHover);

        },
        mouseleave: function(e){

          $(mapDictionary.dimmedPiece).not(mapDictionary.delaware.stateDimmed).removeClass(mapDictionary.dimElementHover);

        },
        click: function(e) {

          e.preventDefault();

          // Mobile
          $(mapDictionary.stateMobileCarousel).attr('class', mapDictionary.delaware.stateMobileBg);

          $(mapDictionary.stateMobileSwap).attr('src', mapDictionary.delaware.stateMobilePiece);

          $(mapDictionary.stateMobileContent).html(mapDictionary.delaware.stateContent);

          $(mapDictionary.dimmedPiece).not(mapDictionary.delaware.stateDimmed).addClass(mapDictionary.dimElementClick);

          $(mapDictionary.modalId).modal(
          {
            backdrop: false,
            keyboard: true
          });

          $(mapDictionary.modalId).addClass(mapDictionary.delaware.stateModal);

          // Call Map Dictionary

          // Title
          $(mapDictionary.modalTitle).html(mapDictionary.delaware.stateTitle);

          // Background
          $(mapDictionary.stateModalColor).attr('class', mapDictionary.delaware.stateColor);

          // Description
          $(mapDictionary.modalBody).html(mapDictionary.delaware.stateContent);

          $(mapDictionary.modalClose).on('click', function(e) {

              $(mapDictionary.modalId).removeClass(mapDictionary.delaware.stateModal);
              $(mapDictionary.stateModalColor).removeClass(mapDictionary.delaware.stateColor);
              $(mapDictionary.dimmedPiece).not(mapDictionary.delaware.stateDimmed).removeClass(mapDictionary.dimElementClick);

          });

        }
      });

    // FL - Florida
    $(mapDictionary.florida.stateSelector).on({

        mouseenter: function(e) {

          $(mapDictionary.dimmedPiece).not(mapDictionary.florida.stateDimmed).addClass(mapDictionary.dimElementHover);

        },
        mouseleave: function(e){

          $(mapDictionary.dimmedPiece).not(mapDictionary.florida.stateDimmed).removeClass(mapDictionary.dimElementHover);

        },
        click: function(e) {

          e.preventDefault();

          // Mobile
          $(mapDictionary.stateMobileCarousel).attr('class', mapDictionary.florida.stateMobileBg);

          $(mapDictionary.stateMobileSwap).attr('src', mapDictionary.florida.stateMobilePiece);

          $(mapDictionary.stateMobileContent).html(mapDictionary.florida.stateContent);

          $(mapDictionary.dimmedPiece).not(mapDictionary.florida.stateDimmed).addClass(mapDictionary.dimElementClick);

          $(mapDictionary.modalId).modal(
          {
            backdrop: false,
            keyboard: true
          });

          $(mapDictionary.modalId).addClass(mapDictionary.florida.stateModal);

          // Call Map Dictionary

          // Title
          $(mapDictionary.modalTitle).html(mapDictionary.florida.stateTitle);

          // Background
          $(mapDictionary.stateModalColor).attr('class', mapDictionary.florida.stateColor);

          // Description
          $(mapDictionary.modalBody).html(mapDictionary.florida.stateContent);

          $(mapDictionary.modalClose).on('click', function(e) {

              $(mapDictionary.modalId).removeClass(mapDictionary.florida.stateModal);
              $(mapDictionary.stateModalColor).removeClass(mapDictionary.florida.stateColor);
              $(mapDictionary.dimmedPiece).not(mapDictionary.florida.stateDimmed).removeClass(mapDictionary.dimElementClick);

          });

        }
      });

    // GA - Georgia
    $(mapDictionary.georgia.stateSelector).on({

        mouseenter: function(e) {

          $(mapDictionary.dimmedPiece).not(mapDictionary.georgia.stateDimmed).addClass(mapDictionary.dimElementHover);

        },
        mouseleave: function(e){

          $(mapDictionary.dimmedPiece).not(mapDictionary.georgia.stateDimmed).removeClass(mapDictionary.dimElementHover);

        },
        click: function(e) {

          e.preventDefault();

          // Mobile
          $(mapDictionary.stateMobileCarousel).attr('class', mapDictionary.georgia.stateMobileBg);

          $(mapDictionary.stateMobileSwap).attr('src', mapDictionary.georgia.stateMobilePiece);

          $(mapDictionary.stateMobileContent).html(mapDictionary.georgia.stateContent);

          $(mapDictionary.dimmedPiece).not(mapDictionary.georgia.stateDimmed).addClass(mapDictionary.dimElementClick);

          $(mapDictionary.modalId).modal(
          {
            backdrop: false,
            keyboard: true
          });

          $(mapDictionary.modalId).addClass(mapDictionary.georgia.stateModal);

          // Call Map Dictionary

          // Title
          $(mapDictionary.modalTitle).html(mapDictionary.georgia.stateTitle);

          // Background
          $(mapDictionary.stateModalColor).attr('class', mapDictionary.georgia.stateColor);

          // Description
          $(mapDictionary.modalBody).html(mapDictionary.georgia.stateContent);

          $(mapDictionary.modalClose).on('click', function(e) {

              $(mapDictionary.modalId).removeClass(mapDictionary.georgia.stateModal);
              $(mapDictionary.stateModalColor).removeClass(mapDictionary.georgia.stateColor);
              $(mapDictionary.dimmedPiece).not(mapDictionary.georgia.stateDimmed).removeClass(mapDictionary.dimElementClick);

          });

        }
      });

    // HI - Hawaii
    $(mapDictionary.hawaii.stateSelector).on({

        mouseenter: function(e) {

          $(mapDictionary.dimmedPiece).not(mapDictionary.hawaii.stateDimmed).addClass(mapDictionary.dimElementHover);

        },
        mouseleave: function(e){

          $(mapDictionary.dimmedPiece).not(mapDictionary.hawaii.stateDimmed).removeClass(mapDictionary.dimElementHover);

        },
        click: function(e) {

          e.preventDefault();

          // Mobile
          $(mapDictionary.stateMobileCarousel).attr('class', mapDictionary.hawaii.stateMobileBg);

          $(mapDictionary.stateMobileSwap).attr('src', mapDictionary.hawaii.stateMobilePiece);

          $(mapDictionary.stateMobileContent).html(mapDictionary.hawaii.stateContent);

          $(mapDictionary.dimmedPiece).not(mapDictionary.hawaii.stateDimmed).addClass(mapDictionary.dimElementClick);

          $(mapDictionary.modalId).modal(
          {
            backdrop: false,
            keyboard: true
          });

          $(mapDictionary.modalId).addClass(mapDictionary.hawaii.stateModal);

          // Call Map Dictionary

          // Title
          $(mapDictionary.modalTitle).html(mapDictionary.hawaii.stateTitle);

          // Background
          $(mapDictionary.stateModalColor).attr('class', mapDictionary.hawaii.stateColor);

          // Description
          $(mapDictionary.modalBody).html(mapDictionary.hawaii.stateContent);

          $(mapDictionary.modalClose).on('click', function(e) {

              $(mapDictionary.modalId).removeClass(mapDictionary.hawaii.stateModal);
              $(mapDictionary.stateModalColor).removeClass(mapDictionary.hawaii.stateColor);
              $(mapDictionary.dimmedPiece).not(mapDictionary.hawaii.stateDimmed).removeClass(mapDictionary.dimElementClick);

          });

        }
      });

    // ID - Idaho
    $(mapDictionary.idaho.stateSelector).on({

        mouseenter: function(e) {

          $(mapDictionary.dimmedPiece).not(mapDictionary.idaho.stateDimmed).addClass(mapDictionary.dimElementHover);

        },
        mouseleave: function(e){

          $(mapDictionary.dimmedPiece).not(mapDictionary.idaho.stateDimmed).removeClass(mapDictionary.dimElementHover);

        },
        click: function(e) {

          e.preventDefault();

          // Mobile
          $(mapDictionary.stateMobileCarousel).attr('class', mapDictionary.idaho.stateMobileBg);

          $(mapDictionary.stateMobileSwap).attr('src', mapDictionary.idaho.stateMobilePiece);

          $(mapDictionary.stateMobileContent).html(mapDictionary.idaho.stateContent);

          $(mapDictionary.dimmedPiece).not(mapDictionary.idaho.stateDimmed).addClass(mapDictionary.dimElementClick);

          $(mapDictionary.modalId).modal(
          {
            backdrop: false,
            keyboard: true
          });

          $(mapDictionary.modalId).addClass(mapDictionary.idaho.stateModal);

          // Call Map Dictionary

          // Title
          $(mapDictionary.modalTitle).html(mapDictionary.idaho.stateTitle);

          // Background
          $(mapDictionary.stateModalColor).attr('class', mapDictionary.idaho.stateColor);

          // Description
          $(mapDictionary.modalBody).html(mapDictionary.idaho.stateContent);

          $(mapDictionary.modalClose).on('click', function(e) {

              $(mapDictionary.modalId).removeClass(mapDictionary.idaho.stateModal);
              $(mapDictionary.stateModalColor).removeClass(mapDictionary.idaho.stateColor);
              $(mapDictionary.dimmedPiece).not(mapDictionary.idaho.stateDimmed).removeClass(mapDictionary.dimElementClick);

          });

        }
      });

    // IL - Illinois
    $(mapDictionary.illinois.stateSelector).on({

        mouseenter: function(e) {

          $(mapDictionary.dimmedPiece).not(mapDictionary.illinois.stateDimmed).addClass(mapDictionary.dimElementHover);

        },
        mouseleave: function(e){

          $(mapDictionary.dimmedPiece).not(mapDictionary.illinois.stateDimmed).removeClass(mapDictionary.dimElementHover);

        },
        click: function(e) {

          e.preventDefault();

          // Mobile
          $(mapDictionary.stateMobileCarousel).attr('class', mapDictionary.illinois.stateMobileBg);

          $(mapDictionary.stateMobileSwap).attr('src', mapDictionary.illinois.stateMobilePiece);

          $(mapDictionary.stateMobileContent).html(mapDictionary.illinois.stateContent);

          $(mapDictionary.dimmedPiece).not(mapDictionary.illinois.stateDimmed).addClass(mapDictionary.dimElementClick);

          $(mapDictionary.modalId).modal(
          {
            backdrop: false,
            keyboard: true
          });

          $(mapDictionary.modalId).addClass(mapDictionary.illinois.stateModal);

          // Call Map Dictionary

          // Title
          $(mapDictionary.modalTitle).html(mapDictionary.illinois.stateTitle);

          // Background
          $(mapDictionary.stateModalColor).attr('class', mapDictionary.illinois.stateColor);

          // Description
          $(mapDictionary.modalBody).html(mapDictionary.illinois.stateContent);

          $(mapDictionary.modalClose).on('click', function(e) {

              $(mapDictionary.modalId).removeClass(mapDictionary.illinois.stateModal);
              $(mapDictionary.stateModalColor).removeClass(mapDictionary.illinois.stateColor);
              $(mapDictionary.dimmedPiece).not(mapDictionary.illinois.stateDimmed).removeClass(mapDictionary.dimElementClick);

          });

        }
      });

    // IN - Indiana
    $(mapDictionary.indiana.stateSelector).on({

        mouseenter: function(e) {

          $(mapDictionary.dimmedPiece).not(mapDictionary.indiana.stateDimmed).addClass(mapDictionary.dimElementHover);

        },
        mouseleave: function(e){

          $(mapDictionary.dimmedPiece).not(mapDictionary.indiana.stateDimmed).removeClass(mapDictionary.dimElementHover);

        },
        click: function(e) {

          e.preventDefault();

          // Mobile
          $(mapDictionary.stateMobileCarousel).attr('class', mapDictionary.indiana.stateMobileBg);

          $(mapDictionary.stateMobileSwap).attr('src', mapDictionary.indiana.stateMobilePiece);

          $(mapDictionary.stateMobileContent).html(mapDictionary.indiana.stateContent);

          $(mapDictionary.dimmedPiece).not(mapDictionary.indiana.stateDimmed).addClass(mapDictionary.dimElementClick);

          $(mapDictionary.modalId).modal(
          {
            backdrop: false,
            keyboard: true
          });

          $(mapDictionary.modalId).addClass(mapDictionary.indiana.stateModal);

          // Call Map Dictionary

          // Title
          $(mapDictionary.modalTitle).html(mapDictionary.indiana.stateTitle);

          // Background
          $(mapDictionary.stateModalColor).attr('class', mapDictionary.indiana.stateColor);

          // Description
          $(mapDictionary.modalBody).html(mapDictionary.indiana.stateContent);

          $(mapDictionary.modalClose).on('click', function(e) {

              $(mapDictionary.modalId).removeClass(mapDictionary.indiana.stateModal);
              $(mapDictionary.stateModalColor).removeClass(mapDictionary.indiana.stateColor);
              $(mapDictionary.dimmedPiece).not(mapDictionary.indiana.stateDimmed).removeClass(mapDictionary.dimElementClick);

          });

        }
      });

    // IA - Iowa
    $(mapDictionary.iowa.stateSelector).on({

        mouseenter: function(e) {

          $(mapDictionary.dimmedPiece).not(mapDictionary.iowa.stateDimmed).addClass(mapDictionary.dimElementHover);

        },
        mouseleave: function(e){

          $(mapDictionary.dimmedPiece).not(mapDictionary.iowa.stateDimmed).removeClass(mapDictionary.dimElementHover);

        },
        click: function(e) {

          e.preventDefault();

          // Mobile
          $(mapDictionary.stateMobileCarousel).attr('class', mapDictionary.iowa.stateMobileBg);

          $(mapDictionary.stateMobileSwap).attr('src', mapDictionary.iowa.stateMobilePiece);

          $(mapDictionary.stateMobileContent).html(mapDictionary.iowa.stateContent);

          $(mapDictionary.dimmedPiece).not(mapDictionary.iowa.stateDimmed).addClass(mapDictionary.dimElementClick);

          $(mapDictionary.modalId).modal(
          {
            backdrop: false,
            keyboard: true
          });

          $(mapDictionary.modalId).addClass(mapDictionary.iowa.stateModal);

          // Call Map Dictionary

          // Title
          $(mapDictionary.modalTitle).html(mapDictionary.iowa.stateTitle);

          // Background
          $(mapDictionary.stateModalColor).attr('class', mapDictionary.iowa.stateColor);

          // Description
          $(mapDictionary.modalBody).html(mapDictionary.iowa.stateContent);

          $(mapDictionary.modalClose).on('click', function(e) {

              $(mapDictionary.modalId).removeClass(mapDictionary.iowa.stateModal);
              $(mapDictionary.stateModalColor).removeClass(mapDictionary.iowa.stateColor);
              $(mapDictionary.dimmedPiece).not(mapDictionary.iowa.stateDimmed).removeClass(mapDictionary.dimElementClick);

          });

        }
      });

    // KS - Kansas
    $(mapDictionary.kansas.stateSelector).on({

        mouseenter: function(e) {

          $(mapDictionary.dimmedPiece).not(mapDictionary.kansas.stateDimmed).addClass(mapDictionary.dimElementHover);

        },
        mouseleave: function(e){

          $(mapDictionary.dimmedPiece).not(mapDictionary.kansas.stateDimmed).removeClass(mapDictionary.dimElementHover);

        },
        click: function(e) {

          e.preventDefault();

          // Mobile
          $(mapDictionary.stateMobileCarousel).attr('class', mapDictionary.kansas.stateMobileBg);

          $(mapDictionary.stateMobileSwap).attr('src', mapDictionary.kansas.stateMobilePiece);

          $(mapDictionary.stateMobileContent).html(mapDictionary.kansas.stateContent);

          $(mapDictionary.dimmedPiece).not(mapDictionary.kansas.stateDimmed).addClass(mapDictionary.dimElementClick);

          $(mapDictionary.modalId).modal(
          {
            backdrop: false,
            keyboard: true
          });

          $(mapDictionary.modalId).addClass(mapDictionary.kansas.stateModal);

          // Call Map Dictionary

          // Title
          $(mapDictionary.modalTitle).html(mapDictionary.kansas.stateTitle);

          // Background
          $(mapDictionary.stateModalColor).attr('class', mapDictionary.kansas.stateColor);

          // Description
          $(mapDictionary.modalBody).html(mapDictionary.kansas.stateContent);

          $(mapDictionary.modalClose).on('click', function(e) {

              $(mapDictionary.modalId).removeClass(mapDictionary.kansas.stateModal);
              $(mapDictionary.stateModalColor).removeClass(mapDictionary.kansas.stateColor);
              $(mapDictionary.dimmedPiece).not(mapDictionary.kansas.stateDimmed).removeClass(mapDictionary.dimElementClick);

          });

        }
      });

    // KY - Kentucky
    $(mapDictionary.kentucky.stateSelector).on({

        mouseenter: function(e) {

          $(mapDictionary.dimmedPiece).not(mapDictionary.kentucky.stateDimmed).addClass(mapDictionary.dimElementHover);

        },
        mouseleave: function(e){

          $(mapDictionary.dimmedPiece).not(mapDictionary.kentucky.stateDimmed).removeClass(mapDictionary.dimElementHover);

        },
        click: function(e) {

          e.preventDefault();

          // Mobile
          $(mapDictionary.stateMobileCarousel).attr('class', mapDictionary.kentucky.stateMobileBg);

          $(mapDictionary.stateMobileSwap).attr('src', mapDictionary.kentucky.stateMobilePiece);

          $(mapDictionary.stateMobileContent).html(mapDictionary.kentucky.stateContent);

          $(mapDictionary.dimmedPiece).not(mapDictionary.kentucky.stateDimmed).addClass(mapDictionary.dimElementClick);

          $(mapDictionary.modalId).modal(
          {
            backdrop: false,
            keyboard: true
          });

          $(mapDictionary.modalId).addClass(mapDictionary.kentucky.stateModal);

          // Call Map Dictionary

          // Title
          $(mapDictionary.modalTitle).html(mapDictionary.kentucky.stateTitle);

          // Background
          $(mapDictionary.stateModalColor).attr('class', mapDictionary.kentucky.stateColor);

          // Description
          $(mapDictionary.modalBody).html(mapDictionary.kentucky.stateContent);

          $(mapDictionary.modalClose).on('click', function(e) {

              $(mapDictionary.modalId).removeClass(mapDictionary.kentucky.stateModal);
              $(mapDictionary.stateModalColor).removeClass(mapDictionary.kentucky.stateColor);
              $(mapDictionary.dimmedPiece).not(mapDictionary.kentucky.stateDimmed).removeClass(mapDictionary.dimElementClick);

          });

        }
      });

    // LA - Louisiana
    $(mapDictionary.louisiana.stateSelector).on({

        mouseenter: function(e) {

          $(mapDictionary.dimmedPiece).not(mapDictionary.louisiana.stateDimmed).addClass(mapDictionary.dimElementHover);

        },
        mouseleave: function(e){

          $(mapDictionary.dimmedPiece).not(mapDictionary.louisiana.stateDimmed).removeClass(mapDictionary.dimElementHover);

        },
        click: function(e) {

          e.preventDefault();

          // Mobile
          $(mapDictionary.stateMobileCarousel).attr('class', mapDictionary.louisiana.stateMobileBg);

          $(mapDictionary.stateMobileSwap).attr('src', mapDictionary.louisiana.stateMobilePiece);

          $(mapDictionary.stateMobileContent).html(mapDictionary.kentucky.stateContent);

          $(mapDictionary.dimmedPiece).not(mapDictionary.louisiana.stateDimmed).addClass(mapDictionary.dimElementClick);

          $(mapDictionary.modalId).modal(
          {
            backdrop: false,
            keyboard: true
          });

          $(mapDictionary.modalId).addClass(mapDictionary.louisiana.stateModal);

          // Call Map Dictionary

          // Title
          $(mapDictionary.modalTitle).html(mapDictionary.louisiana.stateTitle);

          // Background
          $(mapDictionary.stateModalColor).attr('class', mapDictionary.louisiana.stateColor);

          // Description
          $(mapDictionary.modalBody).html(mapDictionary.louisiana.stateContent);

          $(mapDictionary.modalClose).on('click', function(e) {

              $(mapDictionary.modalId).removeClass(mapDictionary.louisiana.stateModal);
              $(mapDictionary.stateModalColor).removeClass(mapDictionary.louisiana.stateColor);
              $(mapDictionary.dimmedPiece).not(mapDictionary.louisiana.stateDimmed).removeClass(mapDictionary.dimElementClick);

          });

        }
      });

    // ME - Maine
    $(mapDictionary.maine.stateSelector).on({

        mouseenter: function(e) {

          $(mapDictionary.dimmedPiece).not(mapDictionary.maine.stateDimmed).addClass(mapDictionary.dimElementHover);

        },
        mouseleave: function(e){

          $(mapDictionary.dimmedPiece).not(mapDictionary.maine.stateDimmed).removeClass(mapDictionary.dimElementHover);

        },
        click: function(e) {

          e.preventDefault();

          // Mobile
          $(mapDictionary.stateMobileCarousel).attr('class', mapDictionary.maine.stateMobileBg);

          $(mapDictionary.stateMobileSwap).attr('src', mapDictionary.maine.stateMobilePiece);

          $(mapDictionary.stateMobileContent).html(mapDictionary.maine.stateContent);

          $(mapDictionary.dimmedPiece).not(mapDictionary.maine.stateDimmed).addClass(mapDictionary.dimElementClick);

          $(mapDictionary.modalId).modal(
          {
            backdrop: false,
            keyboard: true
          });

          $(mapDictionary.modalId).addClass(mapDictionary.maine.stateModal);

          // Call Map Dictionary

          // Title
          $(mapDictionary.modalTitle).html(mapDictionary.maine.stateTitle);

          // Background
          $(mapDictionary.stateModalColor).attr('class', mapDictionary.maine.stateColor);

          // Description
          $(mapDictionary.modalBody).html(mapDictionary.maine.stateContent);

          $(mapDictionary.modalClose).on('click', function(e) {

              $(mapDictionary.modalId).removeClass(mapDictionary.maine.stateModal);
              $(mapDictionary.stateModalColor).removeClass(mapDictionary.maine.stateColor);
              $(mapDictionary.dimmedPiece).not(mapDictionary.maine.stateDimmed).removeClass(mapDictionary.dimElementClick);

          });

        }
      });

    // MD - Maryland
    $(mapDictionary.maryland.stateSelector).on({

        mouseenter: function(e) {

          $(mapDictionary.dimmedPiece).not(mapDictionary.maryland.stateDimmed).addClass(mapDictionary.dimElementHover);

        },
        mouseleave: function(e){

          $(mapDictionary.dimmedPiece).not(mapDictionary.maryland.stateDimmed).removeClass(mapDictionary.dimElementHover);

        },
        click: function(e) {

          e.preventDefault();

          // Mobile
          $(mapDictionary.stateMobileCarousel).attr('class', mapDictionary.maryland.stateMobileBg);

          $(mapDictionary.stateMobileSwap).attr('src', mapDictionary.maryland.stateMobilePiece);

          $(mapDictionary.stateMobileContent).html(mapDictionary.maryland.stateContent);

          $(mapDictionary.dimmedPiece).not(mapDictionary.maryland.stateDimmed).addClass(mapDictionary.dimElementClick);

          $(mapDictionary.modalId).modal(
          {
            backdrop: false,
            keyboard: true
          });

          $(mapDictionary.modalId).addClass(mapDictionary.maryland.stateModal);

          // Call Map Dictionary

          // Title
          $(mapDictionary.modalTitle).html(mapDictionary.maryland.stateTitle);

          // Background
          $(mapDictionary.stateModalColor).attr('class', mapDictionary.maryland.stateColor);

          // Description
          $(mapDictionary.modalBody).html(mapDictionary.maryland.stateContent);

          $(mapDictionary.modalClose).on('click', function(e) {

              $(mapDictionary.modalId).removeClass(mapDictionary.maryland.stateModal);
              $(mapDictionary.stateModalColor).removeClass(mapDictionary.maryland.stateColor);
              $(mapDictionary.dimmedPiece).not(mapDictionary.maryland.stateDimmed).removeClass(mapDictionary.dimElementClick);

          });

        }
      });

    // MA - Massachusetts
    $(mapDictionary.massachusetts.stateSelector).on({

        mouseenter: function(e) {

          $(mapDictionary.dimmedPiece).not(mapDictionary.massachusetts.stateDimmed).addClass(mapDictionary.dimElementHover);

        },
        mouseleave: function(e){

          $(mapDictionary.dimmedPiece).not(mapDictionary.massachusetts.stateDimmed).removeClass(mapDictionary.dimElementHover);

        },
        click: function(e) {

          e.preventDefault();

          // Mobile
          $(mapDictionary.stateMobileCarousel).attr('class', mapDictionary.massachusetts.stateMobileBg);

          $(mapDictionary.stateMobileSwap).attr('src', mapDictionary.massachusetts.stateMobilePiece);

          $(mapDictionary.stateMobileContent).html(mapDictionary.massachusetts.stateContent);

          $(mapDictionary.dimmedPiece).not(mapDictionary.massachusetts.stateDimmed).addClass(mapDictionary.dimElementClick);

          $(mapDictionary.modalId).modal(
          {
            backdrop: false,
            keyboard: true
          });

          $(mapDictionary.modalId).addClass(mapDictionary.massachusetts.stateModal);

          // Call Map Dictionary

          // Title
          $(mapDictionary.modalTitle).html(mapDictionary.massachusetts.stateTitle);

          // Background
          $(mapDictionary.stateModalColor).attr('class', mapDictionary.massachusetts.stateColor);

          // Description
          $(mapDictionary.modalBody).html(mapDictionary.massachusetts.stateContent);

          $(mapDictionary.modalClose).on('click', function(e) {

              $(mapDictionary.modalId).removeClass(mapDictionary.massachusetts.stateModal);
              $(mapDictionary.stateModalColor).removeClass(mapDictionary.massachusetts.stateColor);
              $(mapDictionary.dimmedPiece).not(mapDictionary.massachusetts.stateDimmed).removeClass(mapDictionary.dimElementClick);

          });

        }
      });

    // MI - Michigan
    $(mapDictionary.michigan.stateSelector).on({

        mouseenter: function(e) {

          $(mapDictionary.dimmedPiece).not(mapDictionary.michigan.stateDimmed).addClass(mapDictionary.dimElementHover);

        },
        mouseleave: function(e){

          $(mapDictionary.dimmedPiece).not(mapDictionary.michigan.stateDimmed).removeClass(mapDictionary.dimElementHover);

        },
        click: function(e) {

          e.preventDefault();

          // Mobile
          $(mapDictionary.stateMobileCarousel).attr('class', mapDictionary.michigan.stateMobileBg);

          $(mapDictionary.stateMobileSwap).attr('src', mapDictionary.michigan.stateMobilePiece);

          $(mapDictionary.stateMobileContent).html(mapDictionary.michigan.stateContent);

          $(mapDictionary.dimmedPiece).not(mapDictionary.michigan.stateDimmed).addClass(mapDictionary.dimElementClick);

          $(mapDictionary.modalId).modal(
          {
            backdrop: false,
            keyboard: true
          });

          $(mapDictionary.modalId).addClass(mapDictionary.michigan.stateModal);

          // Call Map Dictionary

          // Title
          $(mapDictionary.modalTitle).html(mapDictionary.michigan.stateTitle);

          // Background
          $(mapDictionary.stateModalColor).attr('class', mapDictionary.michigan.stateColor);

          // Description
          $(mapDictionary.modalBody).html(mapDictionary.michigan.stateContent);

          $(mapDictionary.modalClose).on('click', function(e) {

              $(mapDictionary.modalId).removeClass(mapDictionary.michigan.stateModal);
              $(mapDictionary.stateModalColor).removeClass(mapDictionary.michigan.stateColor);
              $(mapDictionary.dimmedPiece).not(mapDictionary.michigan.stateDimmed).removeClass(mapDictionary.dimElementClick);

          });

        }
      });

    // MN - Minnesota
    $(mapDictionary.minnesota.stateSelector).on({

        mouseenter: function(e) {

          $(mapDictionary.dimmedPiece).not(mapDictionary.minnesota.stateDimmed).addClass(mapDictionary.dimElementHover);

        },
        mouseleave: function(e){

          $(mapDictionary.dimmedPiece).not(mapDictionary.minnesota.stateDimmed).removeClass(mapDictionary.dimElementHover);

        },
        click: function(e) {

          e.preventDefault();

          // Mobile
          $(mapDictionary.stateMobileCarousel).attr('class', mapDictionary.minnesota.stateMobileBg);

          $(mapDictionary.stateMobileSwap).attr('src', mapDictionary.minnesota.stateMobilePiece);

          $(mapDictionary.stateMobileContent).html(mapDictionary.minnesota.stateContent);

          $(mapDictionary.dimmedPiece).not(mapDictionary.minnesota.stateDimmed).addClass(mapDictionary.dimElementClick);

          $(mapDictionary.modalId).modal(
          {
            backdrop: false,
            keyboard: true
          });

          $(mapDictionary.modalId).addClass(mapDictionary.minnesota.stateModal);

          // Call Map Dictionary

          // Title
          $(mapDictionary.modalTitle).html(mapDictionary.minnesota.stateTitle);

          // Background
          $(mapDictionary.stateModalColor).attr('class', mapDictionary.minnesota.stateColor);

          // Description
          $(mapDictionary.modalBody).html(mapDictionary.minnesota.stateContent);

          $(mapDictionary.modalClose).on('click', function(e) {

              $(mapDictionary.modalId).removeClass(mapDictionary.minnesota.stateModal);
              $(mapDictionary.stateModalColor).removeClass(mapDictionary.minnesota.stateColor);
              $(mapDictionary.dimmedPiece).not(mapDictionary.minnesota.stateDimmed).removeClass(mapDictionary.dimElementClick);

          });

        }
      });

    // MS - Mississippi
    $(mapDictionary.mississippi.stateSelector).on({

        mouseenter: function(e) {

          $(mapDictionary.dimmedPiece).not(mapDictionary.mississippi.stateDimmed).addClass(mapDictionary.dimElementHover);

        },
        mouseleave: function(e){

          $(mapDictionary.dimmedPiece).not(mapDictionary.mississippi.stateDimmed).removeClass(mapDictionary.dimElementHover);

        },
        click: function(e) {

          e.preventDefault();

          // Mobile
          $(mapDictionary.stateMobileCarousel).attr('class', mapDictionary.mississippi.stateMobileBg);

          $(mapDictionary.stateMobileSwap).attr('src', mapDictionary.mississippi.stateMobilePiece);

          $(mapDictionary.stateMobileContent).html(mapDictionary.mississippi.stateContent);

          $(mapDictionary.dimmedPiece).not(mapDictionary.mississippi.stateDimmed).addClass(mapDictionary.dimElementClick);

          $(mapDictionary.modalId).modal(
          {
            backdrop: false,
            keyboard: true
          });

          $(mapDictionary.modalId).addClass(mapDictionary.mississippi.stateModal);

          // Call Map Dictionary

          // Title
          $(mapDictionary.modalTitle).html(mapDictionary.mississippi.stateTitle);

          // Background
          $(mapDictionary.stateModalColor).attr('class', mapDictionary.mississippi.stateColor);

          // Description
          $(mapDictionary.modalBody).html(mapDictionary.mississippi.stateContent);

          $(mapDictionary.modalClose).on('click', function(e) {

              $(mapDictionary.modalId).removeClass(mapDictionary.mississippi.stateModal);
              $(mapDictionary.stateModalColor).removeClass(mapDictionary.mississippi.stateColor);
              $(mapDictionary.dimmedPiece).not(mapDictionary.mississippi.stateDimmed).removeClass(mapDictionary.dimElementClick);

          });

        }
      });

    // MO - Missouri
    $(mapDictionary.missouri.stateSelector).on({

        mouseenter: function(e) {

          $(mapDictionary.dimmedPiece).not(mapDictionary.missouri.stateDimmed).addClass(mapDictionary.dimElementHover);

        },
        mouseleave: function(e){

          $(mapDictionary.dimmedPiece).not(mapDictionary.missouri.stateDimmed).removeClass(mapDictionary.dimElementHover);

        },
        click: function(e) {

          e.preventDefault();

          // Mobile
          $(mapDictionary.stateMobileCarousel).attr('class', mapDictionary.missouri.stateMobileBg);

          $(mapDictionary.stateMobileSwap).attr('src', mapDictionary.missouri.stateMobilePiece);

          $(mapDictionary.stateMobileContent).html(mapDictionary.missouri.stateContent);

          $(mapDictionary.dimmedPiece).not(mapDictionary.missouri.stateDimmed).addClass(mapDictionary.dimElementClick);

          $(mapDictionary.modalId).modal(
          {
            backdrop: false,
            keyboard: true
          });

          $(mapDictionary.modalId).addClass(mapDictionary.missouri.stateModal);

          // Call Map Dictionary

          // Title
          $(mapDictionary.modalTitle).html(mapDictionary.missouri.stateTitle);

          // Background
          $(mapDictionary.stateModalColor).attr('class', mapDictionary.missouri.stateColor);

          // Description
          $(mapDictionary.modalBody).html(mapDictionary.missouri.stateContent);

          $(mapDictionary.modalClose).on('click', function(e) {

              $(mapDictionary.modalId).removeClass(mapDictionary.missouri.stateModal);
              $(mapDictionary.stateModalColor).removeClass(mapDictionary.missouri.stateColor);
              $(mapDictionary.dimmedPiece).not(mapDictionary.missouri.stateDimmed).removeClass(mapDictionary.dimElementClick);

          });

        }
      });

    // MT - Montana
    $(mapDictionary.montana.stateSelector).on({

        mouseenter: function(e) {

          $(mapDictionary.dimmedPiece).not(mapDictionary.montana.stateDimmed).addClass(mapDictionary.dimElementHover);

        },
        mouseleave: function(e){

          $(mapDictionary.dimmedPiece).not(mapDictionary.montana.stateDimmed).removeClass(mapDictionary.dimElementHover);

        },
        click: function(e) {

          e.preventDefault();

          // Mobile
          $(mapDictionary.stateMobileCarousel).attr('class', mapDictionary.montana.stateMobileBg);

          $(mapDictionary.stateMobileSwap).attr('src', mapDictionary.montana.stateMobilePiece);

          $(mapDictionary.stateMobileContent).html(mapDictionary.montana.stateContent);

          $(mapDictionary.dimmedPiece).not(mapDictionary.montana.stateDimmed).addClass(mapDictionary.dimElementClick);

          $(mapDictionary.modalId).modal(
          {
            backdrop: false,
            keyboard: true
          });

          $(mapDictionary.modalId).addClass(mapDictionary.montana.stateModal);

          // Call Map Dictionary

          // Title
          $(mapDictionary.modalTitle).html(mapDictionary.montana.stateTitle);

          // Background
          $(mapDictionary.stateModalColor).attr('class', mapDictionary.montana.stateColor);

          // Description
          $(mapDictionary.modalBody).html(mapDictionary.montana.stateContent);

          $(mapDictionary.modalClose).on('click', function(e) {

              $(mapDictionary.modalId).removeClass(mapDictionary.montana.stateModal);
              $(mapDictionary.stateModalColor).removeClass(mapDictionary.montana.stateColor);
              $(mapDictionary.dimmedPiece).not(mapDictionary.montana.stateDimmed).removeClass(mapDictionary.dimElementClick);

          });

        }
      });

    // NE - Nebraska
    $(mapDictionary.nebraska.stateSelector).on({

        mouseenter: function(e) {

          $(mapDictionary.dimmedPiece).not(mapDictionary.nebraska.stateDimmed).addClass(mapDictionary.dimElementHover);

        },
        mouseleave: function(e){

          $(mapDictionary.dimmedPiece).not(mapDictionary.nebraska.stateDimmed).removeClass(mapDictionary.dimElementHover);

        },
        click: function(e) {

          e.preventDefault();

          // Mobile
          $(mapDictionary.stateMobileCarousel).attr('class', mapDictionary.nebraska.stateMobileBg);

          $(mapDictionary.stateMobileSwap).attr('src', mapDictionary.nebraska.stateMobilePiece);

          $(mapDictionary.stateMobileContent).html(mapDictionary.nebraska.stateContent);

          $(mapDictionary.dimmedPiece).not(mapDictionary.nebraska.stateDimmed).addClass(mapDictionary.dimElementClick);

          $(mapDictionary.modalId).modal(
          {
            backdrop: false,
            keyboard: true
          });

          $(mapDictionary.modalId).addClass(mapDictionary.nebraska.stateModal);

          // Call Map Dictionary

          // Title
          $(mapDictionary.modalTitle).html(mapDictionary.nebraska.stateTitle);

          // Background
          $(mapDictionary.stateModalColor).attr('class', mapDictionary.nebraska.stateColor);

          // Description
          $(mapDictionary.modalBody).html(mapDictionary.nebraska.stateContent);

          $(mapDictionary.modalClose).on('click', function(e) {

              $(mapDictionary.modalId).removeClass(mapDictionary.nebraska.stateModal);
              $(mapDictionary.stateModalColor).removeClass(mapDictionary.nebraska.stateColor);
              $(mapDictionary.dimmedPiece).not(mapDictionary.nebraska.stateDimmed).removeClass(mapDictionary.dimElementClick);

          });

        }
      });

    // NV - Nevada
    $(mapDictionary.nevada.stateSelector).on({

        mouseenter: function(e) {

          $(mapDictionary.dimmedPiece).not(mapDictionary.nevada.stateDimmed).addClass(mapDictionary.dimElementHover);

        },
        mouseleave: function(e){

          $(mapDictionary.dimmedPiece).not(mapDictionary.nevada.stateDimmed).removeClass(mapDictionary.dimElementHover);

        },
        click: function(e) {

          e.preventDefault();

          // Mobile
          $(mapDictionary.stateMobileCarousel).attr('class', mapDictionary.nevada.stateMobileBg);

          $(mapDictionary.stateMobileSwap).attr('src', mapDictionary.nevada.stateMobilePiece);

          $(mapDictionary.stateMobileContent).html(mapDictionary.nevada.stateContent);

          $(mapDictionary.dimmedPiece).not(mapDictionary.nevada.stateDimmed).addClass(mapDictionary.dimElementClick);

          $(mapDictionary.modalId).modal(
          {
            backdrop: false,
            keyboard: true
          });

          $(mapDictionary.modalId).addClass(mapDictionary.nevada.stateModal);

          // Call Map Dictionary

          // Title
          $(mapDictionary.modalTitle).html(mapDictionary.nevada.stateTitle);

          // Background
          $(mapDictionary.stateModalColor).attr('class', mapDictionary.nevada.stateColor);

          // Description
          $(mapDictionary.modalBody).html(mapDictionary.nevada.stateContent);

          $(mapDictionary.modalClose).on('click', function(e) {

              $(mapDictionary.modalId).removeClass(mapDictionary.nevada.stateModal);
              $(mapDictionary.stateModalColor).removeClass(mapDictionary.nevada.stateColor);
              $(mapDictionary.dimmedPiece).not(mapDictionary.nevada.stateDimmed).removeClass(mapDictionary.dimElementClick);

          });

        }
      });

    // NH - New Hampshire
    $(mapDictionary.newHampshire.stateSelector).on({

        mouseenter: function(e) {

          $(mapDictionary.dimmedPiece).not(mapDictionary.newHampshire.stateDimmed).addClass(mapDictionary.dimElementHover);

        },
        mouseleave: function(e){

          $(mapDictionary.dimmedPiece).not(mapDictionary.newHampshire.stateDimmed).removeClass(mapDictionary.dimElementHover);

        },
        click: function(e) {

          e.preventDefault();

          // Mobile
          $(mapDictionary.stateMobileCarousel).attr('class', mapDictionary.newHampshire.stateMobileBg);

          $(mapDictionary.stateMobileSwap).attr('src', mapDictionary.newHampshire.stateMobilePiece);

          $(mapDictionary.stateMobileContent).html(mapDictionary.newHampshire.stateContent);

          $(mapDictionary.dimmedPiece).not(mapDictionary.newHampshire.stateDimmed).addClass(mapDictionary.dimElementClick);

          $(mapDictionary.modalId).modal(
          {
            backdrop: false,
            keyboard: true
          });

          $(mapDictionary.modalId).addClass(mapDictionary.newHampshire.stateModal);

          // Call Map Dictionary

          // Title
          $(mapDictionary.modalTitle).html(mapDictionary.newHampshire.stateTitle);

          // Background
          $(mapDictionary.stateModalColor).attr('class', mapDictionary.newHampshire.stateColor);

          // Description
          $(mapDictionary.modalBody).html(mapDictionary.newHampshire.stateContent);

          $(mapDictionary.modalClose).on('click', function(e) {

              $(mapDictionary.modalId).removeClass(mapDictionary.newHampshire.stateModal);
              $(mapDictionary.stateModalColor).removeClass(mapDictionary.newHampshire.stateColor);
              $(mapDictionary.dimmedPiece).not(mapDictionary.newHampshire.stateDimmed).removeClass(mapDictionary.dimElementClick);

          });

        }
      });

    // NJ - New Jersey
    $(mapDictionary.newJersey.stateSelector).on({

        mouseenter: function(e) {

          $(mapDictionary.dimmedPiece).not(mapDictionary.newJersey.stateDimmed).addClass(mapDictionary.dimElementHover);

        },
        mouseleave: function(e){

          $(mapDictionary.dimmedPiece).not(mapDictionary.newJersey.stateDimmed).removeClass(mapDictionary.dimElementHover);

        },
        click: function(e) {

          e.preventDefault();

          // Mobile
          $(mapDictionary.stateMobileCarousel).attr('class', mapDictionary.newJersey.stateMobileBg);

          $(mapDictionary.stateMobileSwap).attr('src', mapDictionary.newJersey.stateMobilePiece);

          $(mapDictionary.stateMobileContent).html(mapDictionary.newJersey.stateContent);

          $(mapDictionary.dimmedPiece).not(mapDictionary.newJersey.stateDimmed).addClass(mapDictionary.dimElementClick);

          $(mapDictionary.modalId).modal(
          {
            backdrop: false,
            keyboard: true
          });

          $(mapDictionary.modalId).addClass(mapDictionary.newJersey.stateModal);

          // Call Map Dictionary

          // Title
          $(mapDictionary.modalTitle).html(mapDictionary.newJersey.stateTitle);

          // Background
          $(mapDictionary.stateModalColor).attr('class', mapDictionary.newJersey.stateColor);

          // Description
          $(mapDictionary.modalBody).html(mapDictionary.newJersey.stateContent);

          $(mapDictionary.modalClose).on('click', function(e) {

              $(mapDictionary.modalId).removeClass(mapDictionary.newJersey.stateModal);
              $(mapDictionary.stateModalColor).removeClass(mapDictionary.newJersey.stateColor);
              $(mapDictionary.dimmedPiece).not(mapDictionary.newJersey.stateDimmed).removeClass(mapDictionary.dimElementClick);

          });

        }
      });

    // NM - New Mexico
    $(mapDictionary.newMexico.stateSelector).on({

        mouseenter: function(e) {

          $(mapDictionary.dimmedPiece).not(mapDictionary.newMexico.stateDimmed).addClass(mapDictionary.dimElementHover);

        },
        mouseleave: function(e){

          $(mapDictionary.dimmedPiece).not(mapDictionary.newMexico.stateDimmed).removeClass(mapDictionary.dimElementHover);

        },
        click: function(e) {

          e.preventDefault();

          // Mobile
          $(mapDictionary.stateMobileCarousel).attr('class', mapDictionary.newMexico.stateMobileBg);

          $(mapDictionary.stateMobileSwap).attr('src', mapDictionary.newMexico.stateMobilePiece);

          $(mapDictionary.stateMobileContent).html(mapDictionary.newMexico.stateContent);

          $(mapDictionary.dimmedPiece).not(mapDictionary.newMexico.stateDimmed).addClass(mapDictionary.dimElementClick);

          $(mapDictionary.modalId).modal(
          {
            backdrop: false,
            keyboard: true
          });

          $(mapDictionary.modalId).addClass(mapDictionary.newMexico.stateModal);

          // Call Map Dictionary

          // Title
          $(mapDictionary.modalTitle).html(mapDictionary.newMexico.stateTitle);

          // Background
          $(mapDictionary.stateModalColor).attr('class', mapDictionary.newMexico.stateColor);

          // Description
          $(mapDictionary.modalBody).html(mapDictionary.newMexico.stateContent);

          $(mapDictionary.modalClose).on('click', function(e) {

              $(mapDictionary.modalId).removeClass(mapDictionary.newMexico.stateModal);
              $(mapDictionary.stateModalColor).removeClass(mapDictionary.newMexico.stateColor);
              $(mapDictionary.dimmedPiece).not(mapDictionary.newMexico.stateDimmed).removeClass(mapDictionary.dimElementClick);

          });

        }
      });

    // NY - New York
    $(mapDictionary.newYork.stateSelector).on({

        mouseenter: function(e) {

          $(mapDictionary.dimmedPiece).not(mapDictionary.newYork.stateDimmed).addClass(mapDictionary.dimElementHover);

        },
        mouseleave: function(e){

          $(mapDictionary.dimmedPiece).not(mapDictionary.newYork.stateDimmed).removeClass(mapDictionary.dimElementHover);

        },
        click: function(e) {

          e.preventDefault();

          // Mobile
          $(mapDictionary.stateMobileCarousel).attr('class', mapDictionary.newYork.stateMobileBg);

          $(mapDictionary.stateMobileSwap).attr('src', mapDictionary.newYork.stateMobilePiece);

          $(mapDictionary.stateMobileContent).html(mapDictionary.newYork.stateContent);

          $(mapDictionary.dimmedPiece).not(mapDictionary.newYork.stateDimmed).addClass(mapDictionary.dimElementClick);

          $(mapDictionary.modalId).modal(
          {
            backdrop: false,
            keyboard: true
          });

          $(mapDictionary.modalId).addClass(mapDictionary.newYork.stateModal);

          // Call Map Dictionary

          // Title
          $(mapDictionary.modalTitle).html(mapDictionary.newYork.stateTitle);

          // Background
          $(mapDictionary.stateModalColor).attr('class', mapDictionary.newYork.stateColor);

          // Description
          $(mapDictionary.modalBody).html(mapDictionary.newYork.stateContent);

          $(mapDictionary.modalClose).on('click', function(e) {

              $(mapDictionary.modalId).removeClass(mapDictionary.newYork.stateModal);
              $(mapDictionary.stateModalColor).removeClass(mapDictionary.newYork.stateColor);
              $(mapDictionary.dimmedPiece).not(mapDictionary.newYork.stateDimmed).removeClass(mapDictionary.dimElementClick);

          });

        }
      });

    // NC - North Carolina
    $(mapDictionary.northCarolina.stateSelector).on({

        mouseenter: function(e) {

          $(mapDictionary.dimmedPiece).not(mapDictionary.northCarolina.stateDimmed).addClass(mapDictionary.dimElementHover);

        },
        mouseleave: function(e){

          $(mapDictionary.dimmedPiece).not(mapDictionary.northCarolina.stateDimmed).removeClass(mapDictionary.dimElementHover);

        },
        click: function(e) {

          e.preventDefault();

          // Mobile
          $(mapDictionary.stateMobileCarousel).attr('class', mapDictionary.northCarolina.stateMobileBg);

          $(mapDictionary.stateMobileSwap).attr('src', mapDictionary.northCarolina.stateMobilePiece);

          $(mapDictionary.stateMobileContent).html(mapDictionary.northCarolina.stateContent);

          $(mapDictionary.dimmedPiece).not(mapDictionary.northCarolina.stateDimmed).addClass(mapDictionary.dimElementClick);

          $(mapDictionary.modalId).modal(
          {
            backdrop: false,
            keyboard: true
          });

          $(mapDictionary.modalId).addClass(mapDictionary.northCarolina.stateModal);

          // Call Map Dictionary

          // Title
          $(mapDictionary.modalTitle).html(mapDictionary.northCarolina.stateTitle);

          // Background
          $(mapDictionary.stateModalColor).attr('class', mapDictionary.northCarolina.stateColor);

          // Description
          $(mapDictionary.modalBody).html(mapDictionary.northCarolina.stateContent);

          $(mapDictionary.modalClose).on('click', function(e) {

              $(mapDictionary.modalId).removeClass(mapDictionary.northCarolina.stateModal);
              $(mapDictionary.stateModalColor).removeClass(mapDictionary.northCarolina.stateColor);
              $(mapDictionary.dimmedPiece).not(mapDictionary.northCarolina.stateDimmed).removeClass(mapDictionary.dimElementClick);

          });

        }
      });

    // ND - North Dakota
    $(mapDictionary.northDakota.stateSelector).on({

        mouseenter: function(e) {

          $(mapDictionary.dimmedPiece).not(mapDictionary.northDakota.stateDimmed).addClass(mapDictionary.dimElementHover);

        },
        mouseleave: function(e){

          $(mapDictionary.dimmedPiece).not(mapDictionary.northDakota.stateDimmed).removeClass(mapDictionary.dimElementHover);

        },
        click: function(e) {

          e.preventDefault();

          // Mobile
          $(mapDictionary.stateMobileCarousel).attr('class', mapDictionary.northDakota.stateMobileBg);

          $(mapDictionary.stateMobileSwap).attr('src', mapDictionary.northDakota.stateMobilePiece);

          $(mapDictionary.stateMobileContent).html(mapDictionary.northDakota.stateContent);

          $(mapDictionary.dimmedPiece).not(mapDictionary.northDakota.stateDimmed).addClass(mapDictionary.dimElementClick);

          $(mapDictionary.modalId).modal(
          {
            backdrop: false,
            keyboard: true
          });

          $(mapDictionary.modalId).addClass(mapDictionary.northDakota.stateModal);

          // Call Map Dictionary

          // Title
          $(mapDictionary.modalTitle).html(mapDictionary.northDakota.stateTitle);

          // Background
          $(mapDictionary.stateModalColor).attr('class', mapDictionary.northDakota.stateColor);

          // Description
          $(mapDictionary.modalBody).html(mapDictionary.northDakota.stateContent);

          $(mapDictionary.modalClose).on('click', function(e) {

              $(mapDictionary.modalId).removeClass(mapDictionary.northDakota.stateModal);
              $(mapDictionary.stateModalColor).removeClass(mapDictionary.northDakota.stateColor);
              $(mapDictionary.dimmedPiece).not(mapDictionary.northDakota.stateDimmed).removeClass(mapDictionary.dimElementClick);

          });

        }
      });

    // OH - Ohio
    $(mapDictionary.ohio.stateSelector).on({

        mouseenter: function(e) {

          $(mapDictionary.dimmedPiece).not(mapDictionary.ohio.stateDimmed).addClass(mapDictionary.dimElementHover);

        },
        mouseleave: function(e){

          $(mapDictionary.dimmedPiece).not(mapDictionary.ohio.stateDimmed).removeClass(mapDictionary.dimElementHover);

        },
        click: function(e) {

          e.preventDefault();

          // Mobile
          $(mapDictionary.stateMobileCarousel).attr('class', mapDictionary.ohio.stateMobileBg);

          $(mapDictionary.stateMobileSwap).attr('src', mapDictionary.ohio.stateMobilePiece);

          $(mapDictionary.stateMobileContent).html(mapDictionary.ohio.stateContent);

          $(mapDictionary.dimmedPiece).not(mapDictionary.ohio.stateDimmed).addClass(mapDictionary.dimElementClick);

          $(mapDictionary.modalId).modal(
          {
            backdrop: false,
            keyboard: true
          });

          $(mapDictionary.modalId).addClass(mapDictionary.ohio.stateModal);

          // Call Map Dictionary

          // Title
          $(mapDictionary.modalTitle).html(mapDictionary.ohio.stateTitle);

          // Background
          $(mapDictionary.stateModalColor).attr('class', mapDictionary.ohio.stateColor);

          // Description
          $(mapDictionary.modalBody).html(mapDictionary.ohio.stateContent);

          $(mapDictionary.modalClose).on('click', function(e) {

              $(mapDictionary.modalId).removeClass(mapDictionary.ohio.stateModal);
              $(mapDictionary.stateModalColor).removeClass(mapDictionary.ohio.stateColor);
              $(mapDictionary.dimmedPiece).not(mapDictionary.ohio.stateDimmed).removeClass(mapDictionary.dimElementClick);

          });

        }
      });

    // OK - Oklahoma
    $(mapDictionary.oklahoma.stateSelector).on({

        mouseenter: function(e) {

          $(mapDictionary.dimmedPiece).not(mapDictionary.oklahoma.stateDimmed).addClass(mapDictionary.dimElementHover);

        },
        mouseleave: function(e){

          $(mapDictionary.dimmedPiece).not(mapDictionary.oklahoma.stateDimmed).removeClass(mapDictionary.dimElementHover);

        },
        click: function(e) {

          e.preventDefault();

          // Mobile
          $(mapDictionary.stateMobileCarousel).attr('class', mapDictionary.oklahoma.stateMobileBg);

          $(mapDictionary.stateMobileSwap).attr('src', mapDictionary.oklahoma.stateMobilePiece);

          $(mapDictionary.stateMobileContent).html(mapDictionary.oklahoma.stateContent);

          $(mapDictionary.dimmedPiece).not(mapDictionary.oklahoma.stateDimmed).addClass(mapDictionary.dimElementClick);

          $(mapDictionary.modalId).modal(
          {
            backdrop: false,
            keyboard: true
          });

          $(mapDictionary.modalId).addClass(mapDictionary.oklahoma.stateModal);

          // Call Map Dictionary

          // Title
          $(mapDictionary.modalTitle).html(mapDictionary.oklahoma.stateTitle);

          // Background
          $(mapDictionary.stateModalColor).attr('class', mapDictionary.oklahoma.stateColor);

          // Description
          $(mapDictionary.modalBody).html(mapDictionary.oklahoma.stateContent);

          $(mapDictionary.modalClose).on('click', function(e) {

              $(mapDictionary.modalId).removeClass(mapDictionary.oklahoma.stateModal);
              $(mapDictionary.stateModalColor).removeClass(mapDictionary.oklahoma.stateColor);
              $(mapDictionary.dimmedPiece).not(mapDictionary.oklahoma.stateDimmed).removeClass(mapDictionary.dimElementClick);

          });

        }
      });

    // OR - Oregon
    $(mapDictionary.oregon.stateSelector).on({

        mouseenter: function(e) {

          $(mapDictionary.dimmedPiece).not(mapDictionary.oregon.stateDimmed).addClass(mapDictionary.dimElementHover);

        },
        mouseleave: function(e){

          $(mapDictionary.dimmedPiece).not(mapDictionary.oregon.stateDimmed).removeClass(mapDictionary.dimElementHover);

        },
        click: function(e) {

          e.preventDefault();

          // Mobile
          $(mapDictionary.stateMobileCarousel).attr('class', mapDictionary.oregon.stateMobileBg);

          $(mapDictionary.stateMobileSwap).attr('src', mapDictionary.oregon.stateMobilePiece);

          $(mapDictionary.stateMobileContent).html(mapDictionary.oregon.stateContent);

          $(mapDictionary.dimmedPiece).not(mapDictionary.oregon.stateDimmed).addClass(mapDictionary.dimElementClick);

          $(mapDictionary.modalId).modal(
          {
            backdrop: false,
            keyboard: true
          });

          $(mapDictionary.modalId).addClass(mapDictionary.oregon.stateModal);

          // Call Map Dictionary

          // Title
          $(mapDictionary.modalTitle).html(mapDictionary.oregon.stateTitle);

          // Background
          $(mapDictionary.stateModalColor).attr('class', mapDictionary.oregon.stateColor);

          // Description
          $(mapDictionary.modalBody).html(mapDictionary.oregon.stateContent);

          $(mapDictionary.modalClose).on('click', function(e) {

              $(mapDictionary.modalId).removeClass(mapDictionary.oregon.stateModal);
              $(mapDictionary.stateModalColor).removeClass(mapDictionary.oregon.stateColor);
              $(mapDictionary.dimmedPiece).not(mapDictionary.oregon.stateDimmed).removeClass(mapDictionary.dimElementClick);

          });

        }
      });

    // PA - Pennsylvania
    $(mapDictionary.pennsylvania.stateSelector).on({

        mouseenter: function(e) {

          $(mapDictionary.dimmedPiece).not(mapDictionary.pennsylvania.stateDimmed).addClass(mapDictionary.dimElementHover);

        },
        mouseleave: function(e){

          $(mapDictionary.dimmedPiece).not(mapDictionary.pennsylvania.stateDimmed).removeClass(mapDictionary.dimElementHover);

        },
        click: function(e) {

          e.preventDefault();

          // Mobile
          $(mapDictionary.stateMobileCarousel).attr('class', mapDictionary.pennsylvania.stateMobileBg);

          $(mapDictionary.stateMobileSwap).attr('src', mapDictionary.pennsylvania.stateMobilePiece);

          $(mapDictionary.stateMobileContent).html(mapDictionary.pennsylvania.stateContent);

          $(mapDictionary.dimmedPiece).not(mapDictionary.pennsylvania.stateDimmed).addClass(mapDictionary.dimElementClick);

          $(mapDictionary.modalId).modal(
          {
            backdrop: false,
            keyboard: true
          });

          $(mapDictionary.modalId).addClass(mapDictionary.pennsylvania.stateModal);

          // Call Map Dictionary

          // Title
          $(mapDictionary.modalTitle).html(mapDictionary.pennsylvania.stateTitle);

          // Background
          $(mapDictionary.stateModalColor).attr('class', mapDictionary.pennsylvania.stateColor);

          // Description
          $(mapDictionary.modalBody).html(mapDictionary.pennsylvania.stateContent);

          $(mapDictionary.modalClose).on('click', function(e) {

              $(mapDictionary.modalId).removeClass(mapDictionary.pennsylvania.stateModal);
              $(mapDictionary.stateModalColor).removeClass(mapDictionary.pennsylvania.stateColor);
              $(mapDictionary.dimmedPiece).not(mapDictionary.pennsylvania.stateDimmed).removeClass(mapDictionary.dimElementClick);

          });

        }
      });

    // RI - Rhode Island
    $(mapDictionary.rhodeIsland.stateSelector).on({

        mouseenter: function(e) {

          $(mapDictionary.dimmedPiece).not(mapDictionary.rhodeIsland.stateDimmed).addClass(mapDictionary.dimElementHover);

        },
        mouseleave: function(e){

          $(mapDictionary.dimmedPiece).not(mapDictionary.rhodeIsland.stateDimmed).removeClass(mapDictionary.dimElementHover);

        },
        click: function(e) {

          e.preventDefault();

          // Mobile
          $(mapDictionary.stateMobileCarousel).attr('class', mapDictionary.rhodeIsland.stateMobileBg);

          $(mapDictionary.stateMobileSwap).attr('src', mapDictionary.rhodeIsland.stateMobilePiece);

          $(mapDictionary.stateMobileContent).html(mapDictionary.rhodeIsland.stateContent);

          $(mapDictionary.dimmedPiece).not(mapDictionary.rhodeIsland.stateDimmed).addClass(mapDictionary.dimElementClick);

          $(mapDictionary.modalId).modal(
          {
            backdrop: false,
            keyboard: true
          });

          $(mapDictionary.modalId).addClass(mapDictionary.rhodeIsland.stateModal);

          // Call Map Dictionary

          // Title
          $(mapDictionary.modalTitle).html(mapDictionary.rhodeIsland.stateTitle);

          // Background
          $(mapDictionary.stateModalColor).attr('class', mapDictionary.rhodeIsland.stateColor);

          // Description
          $(mapDictionary.modalBody).html(mapDictionary.rhodeIsland.stateContent);

          $(mapDictionary.modalClose).on('click', function(e) {

              $(mapDictionary.modalId).removeClass(mapDictionary.rhodeIsland.stateModal);
              $(mapDictionary.stateModalColor).removeClass(mapDictionary.rhodeIsland.stateColor);
              $(mapDictionary.dimmedPiece).not(mapDictionary.rhodeIsland.stateDimmed).removeClass(mapDictionary.dimElementClick);

          });

        }
      });

    // SC - South Carolina
    $(mapDictionary.southCarolina.stateSelector).on({

        mouseenter: function(e) {

          $(mapDictionary.dimmedPiece).not(mapDictionary.southCarolina.stateDimmed).addClass(mapDictionary.dimElementHover);

        },
        mouseleave: function(e){

          $(mapDictionary.dimmedPiece).not(mapDictionary.southCarolina.stateDimmed).removeClass(mapDictionary.dimElementHover);

        },
        click: function(e) {

          e.preventDefault();

          // Mobile
          $(mapDictionary.stateMobileCarousel).attr('class', mapDictionary.southCarolina.stateMobileBg);

          $(mapDictionary.stateMobileSwap).attr('src', mapDictionary.southCarolina.stateMobilePiece);

          $(mapDictionary.stateMobileContent).html(mapDictionary.southCarolina.stateContent);

          $(mapDictionary.dimmedPiece).not(mapDictionary.southCarolina.stateDimmed).addClass(mapDictionary.dimElementClick);

          $(mapDictionary.modalId).modal(
          {
            backdrop: false,
            keyboard: true
          });

          $(mapDictionary.modalId).addClass(mapDictionary.southCarolina.stateModal);

          // Call Map Dictionary

          // Title
          $(mapDictionary.modalTitle).html(mapDictionary.southCarolina.stateTitle);

          // Background
          $(mapDictionary.stateModalColor).attr('class', mapDictionary.southCarolina.stateColor);

          // Description
          $(mapDictionary.modalBody).html(mapDictionary.southCarolina.stateContent);

          $(mapDictionary.modalClose).on('click', function(e) {

              $(mapDictionary.modalId).removeClass(mapDictionary.southCarolina.stateModal);
              $(mapDictionary.stateModalColor).removeClass(mapDictionary.southCarolina.stateColor);
              $(mapDictionary.dimmedPiece).not(mapDictionary.southCarolina.stateDimmed).removeClass(mapDictionary.dimElementClick);

          });

        }
      });

    // SD - South Dakota
    $(mapDictionary.southDakota.stateSelector).on({

        mouseenter: function(e) {

          $(mapDictionary.dimmedPiece).not(mapDictionary.southDakota.stateDimmed).addClass(mapDictionary.dimElementHover);

        },
        mouseleave: function(e){

          $(mapDictionary.dimmedPiece).not(mapDictionary.southDakota.stateDimmed).removeClass(mapDictionary.dimElementHover);

        },
        click: function(e) {

          e.preventDefault();

          // Mobile
          $(mapDictionary.stateMobileCarousel).attr('class', mapDictionary.southDakota.stateMobileBg);

          $(mapDictionary.stateMobileSwap).attr('src', mapDictionary.southDakota.stateMobilePiece);

          $(mapDictionary.stateMobileContent).html(mapDictionary.southDakota.stateContent);

          $(mapDictionary.dimmedPiece).not(mapDictionary.southDakota.stateDimmed).addClass(mapDictionary.dimElementClick);

          $(mapDictionary.modalId).modal(
          {
            backdrop: false,
            keyboard: true
          });

          $(mapDictionary.modalId).addClass(mapDictionary.southDakota.stateModal);

          // Call Map Dictionary

          // Title
          $(mapDictionary.modalTitle).html(mapDictionary.southDakota.stateTitle);

          // Background
          $(mapDictionary.stateModalColor).attr('class', mapDictionary.southDakota.stateColor);

          // Description
          $(mapDictionary.modalBody).html(mapDictionary.southDakota.stateContent);

          $(mapDictionary.modalClose).on('click', function(e) {

              $(mapDictionary.modalId).removeClass(mapDictionary.southDakota.stateModal);
              $(mapDictionary.stateModalColor).removeClass(mapDictionary.southDakota.stateColor);
              $(mapDictionary.dimmedPiece).not(mapDictionary.southDakota.stateDimmed).removeClass(mapDictionary.dimElementClick);

          });

        }
      });

    // TN - Tennessee
    $(mapDictionary.tennessee.stateSelector).on({

        mouseenter: function(e) {

          $(mapDictionary.dimmedPiece).not(mapDictionary.tennessee.stateDimmed).addClass(mapDictionary.dimElementHover);

        },
        mouseleave: function(e){

          $(mapDictionary.dimmedPiece).not(mapDictionary.tennessee.stateDimmed).removeClass(mapDictionary.dimElementHover);

        },
        click: function(e) {

          e.preventDefault();

          // Mobile
          $(mapDictionary.stateMobileCarousel).attr('class', mapDictionary.tennessee.stateMobileBg);

          $(mapDictionary.stateMobileSwap).attr('src', mapDictionary.tennessee.stateMobilePiece);

          $(mapDictionary.stateMobileContent).html(mapDictionary.tennessee.stateContent);

          $(mapDictionary.dimmedPiece).not(mapDictionary.tennessee.stateDimmed).addClass(mapDictionary.dimElementClick);

          $(mapDictionary.modalId).modal(
          {
            backdrop: false,
            keyboard: true
          });

          $(mapDictionary.modalId).addClass(mapDictionary.tennessee.stateModal);

          // Call Map Dictionary

          // Title
          $(mapDictionary.modalTitle).html(mapDictionary.tennessee.stateTitle);

          // Background
          $(mapDictionary.stateModalColor).attr('class', mapDictionary.tennessee.stateColor);

          // Description
          $(mapDictionary.modalBody).html(mapDictionary.tennessee.stateContent);

          $(mapDictionary.modalClose).on('click', function(e) {

              $(mapDictionary.modalId).removeClass(mapDictionary.tennessee.stateModal);
              $(mapDictionary.stateModalColor).removeClass(mapDictionary.tennessee.stateColor);
              $(mapDictionary.dimmedPiece).not(mapDictionary.tennessee.stateDimmed).removeClass(mapDictionary.dimElementClick);

          });

        }
      });

    // TX - Texas
    $(mapDictionary.texas.stateSelector).on({

        mouseenter: function(e) {

          $(mapDictionary.dimmedPiece).not(mapDictionary.texas.stateDimmed).addClass(mapDictionary.dimElementHover);

        },
        mouseleave: function(e){

          $(mapDictionary.dimmedPiece).not(mapDictionary.texas.stateDimmed).removeClass(mapDictionary.dimElementHover);

        },
        click: function(e) {

          e.preventDefault();

          // Mobile
          $(mapDictionary.stateMobileCarousel).attr('class', mapDictionary.texas.stateMobileBg);

          $(mapDictionary.stateMobileSwap).attr('src', mapDictionary.texas.stateMobilePiece);

          $(mapDictionary.stateMobileContent).html(mapDictionary.texas.stateContent);

          $(mapDictionary.dimmedPiece).not(mapDictionary.texas.stateDimmed).addClass(mapDictionary.dimElementClick);

          $(mapDictionary.modalId).modal(
          {
            backdrop: false,
            keyboard: true
          });

          $(mapDictionary.modalId).addClass(mapDictionary.texas.stateModal);

          // Call Map Dictionary

          // Title
          $(mapDictionary.modalTitle).html(mapDictionary.texas.stateTitle);

          // Background
          $(mapDictionary.stateModalColor).attr('class', mapDictionary.texas.stateColor);

          // Description
          $(mapDictionary.modalBody).html(mapDictionary.texas.stateContent);

          $(mapDictionary.modalClose).on('click', function(e) {

              $(mapDictionary.modalId).removeClass(mapDictionary.texas.stateModal);
              $(mapDictionary.stateModalColor).removeClass(mapDictionary.texas.stateColor);
              $(mapDictionary.dimmedPiece).not(mapDictionary.texas.stateDimmed).removeClass(mapDictionary.dimElementClick);

          });

        }
      });

    // UT - Utah
    $(mapDictionary.utah.stateSelector).on({

        mouseenter: function(e) {

          $(mapDictionary.dimmedPiece).not(mapDictionary.utah.stateDimmed).addClass(mapDictionary.dimElementHover);

        },
        mouseleave: function(e){

          $(mapDictionary.dimmedPiece).not(mapDictionary.utah.stateDimmed).removeClass(mapDictionary.dimElementHover);

        },
        click: function(e) {

          e.preventDefault();

          // Mobile
          $(mapDictionary.stateMobileCarousel).attr('class', mapDictionary.utah.stateMobileBg);

          $(mapDictionary.stateMobileSwap).attr('src', mapDictionary.utah.stateMobilePiece);

          $(mapDictionary.stateMobileContent).html(mapDictionary.utah.stateContent);

          $(mapDictionary.dimmedPiece).not(mapDictionary.utah.stateDimmed).addClass(mapDictionary.dimElementClick);

          $(mapDictionary.modalId).modal(
          {
            backdrop: false,
            keyboard: true
          });

          $(mapDictionary.modalId).addClass(mapDictionary.utah.stateModal);

          // Call Map Dictionary

          // Title
          $(mapDictionary.modalTitle).html(mapDictionary.utah.stateTitle);

          // Background
          $(mapDictionary.stateModalColor).attr('class', mapDictionary.utah.stateColor);

          // Description
          $(mapDictionary.modalBody).html(mapDictionary.utah.stateContent);

          $(mapDictionary.modalClose).on('click', function(e) {

              $(mapDictionary.modalId).removeClass(mapDictionary.utah.stateModal);
              $(mapDictionary.stateModalColor).removeClass(mapDictionary.utah.stateColor);
              $(mapDictionary.dimmedPiece).not(mapDictionary.utah.stateDimmed).removeClass(mapDictionary.dimElementClick);

          });

        }
      });

    // VT - Vermont
    $(mapDictionary.vermont.stateSelector).on({

        mouseenter: function(e) {

          $(mapDictionary.dimmedPiece).not(mapDictionary.vermont.stateDimmed).addClass(mapDictionary.dimElementHover);

        },
        mouseleave: function(e){

          $(mapDictionary.dimmedPiece).not(mapDictionary.vermont.stateDimmed).removeClass(mapDictionary.dimElementHover);

        },
        click: function(e) {

          e.preventDefault();

          // Mobile
          $(mapDictionary.stateMobileCarousel).attr('class', mapDictionary.vermont.stateMobileBg);

          $(mapDictionary.stateMobileSwap).attr('src', mapDictionary.vermont.stateMobilePiece);

          $(mapDictionary.stateMobileContent).html(mapDictionary.vermont.stateContent);

          $(mapDictionary.dimmedPiece).not(mapDictionary.vermont.stateDimmed).addClass(mapDictionary.dimElementClick);

          $(mapDictionary.modalId).modal(
          {
            backdrop: false,
            keyboard: true
          });

          $(mapDictionary.modalId).addClass(mapDictionary.vermont.stateModal);

          // Call Map Dictionary

          // Title
          $(mapDictionary.modalTitle).html(mapDictionary.vermont.stateTitle);

          // Background
          $(mapDictionary.stateModalColor).attr('class', mapDictionary.vermont.stateColor);

          // Description
          $(mapDictionary.modalBody).html(mapDictionary.vermont.stateContent);

          $(mapDictionary.modalClose).on('click', function(e) {

              $(mapDictionary.modalId).removeClass(mapDictionary.vermont.stateModal);
              $(mapDictionary.stateModalColor).removeClass(mapDictionary.vermont.stateColor);
              $(mapDictionary.dimmedPiece).not(mapDictionary.vermont.stateDimmed).removeClass(mapDictionary.dimElementClick);

          });

        }
      });

    // VA - Virginia
    $(mapDictionary.virginia.stateSelector).on({

        mouseenter: function(e) {

          $(mapDictionary.dimmedPiece).not(mapDictionary.virginia.stateDimmed).addClass(mapDictionary.dimElementHover);

        },
        mouseleave: function(e){

          $(mapDictionary.dimmedPiece).not(mapDictionary.virginia.stateDimmed).removeClass(mapDictionary.dimElementHover);

        },
        click: function(e) {

          e.preventDefault();

          // Mobile
          $(mapDictionary.stateMobileCarousel).attr('class', mapDictionary.virginia.stateMobileBg);

          $(mapDictionary.stateMobileSwap).attr('src', mapDictionary.virginia.stateMobilePiece);

          $(mapDictionary.stateMobileContent).html(mapDictionary.virginia.stateContent);

          $(mapDictionary.dimmedPiece).not(mapDictionary.virginia.stateDimmed).addClass(mapDictionary.dimElementClick);

          $(mapDictionary.modalId).modal(
          {
            backdrop: false,
            keyboard: true
          });

          $(mapDictionary.modalId).addClass(mapDictionary.virginia.stateModal);

          // Call Map Dictionary

          // Title
          $(mapDictionary.modalTitle).html(mapDictionary.virginia.stateTitle);

          // Background
          $(mapDictionary.stateModalColor).attr('class', mapDictionary.virginia.stateColor);

          // Description
          $(mapDictionary.modalBody).html(mapDictionary.virginia.stateContent);

          $(mapDictionary.modalClose).on('click', function(e) {

              $(mapDictionary.modalId).removeClass(mapDictionary.virginia.stateModal);
              $(mapDictionary.stateModalColor).removeClass(mapDictionary.virginia.stateColor);
              $(mapDictionary.dimmedPiece).not(mapDictionary.virginia.stateDimmed).removeClass(mapDictionary.dimElementClick);

          });

        }
      });

    // WA - Washington
    $(mapDictionary.washington.stateSelector).on({

        mouseenter: function(e) {

          $(mapDictionary.dimmedPiece).not(mapDictionary.washington.stateDimmed).addClass(mapDictionary.dimElementHover);

        },
        mouseleave: function(e){

          $(mapDictionary.dimmedPiece).not(mapDictionary.washington.stateDimmed).removeClass(mapDictionary.dimElementHover);

        },
        click: function(e) {

          e.preventDefault();

          // Mobile
          $(mapDictionary.stateMobileCarousel).attr('class', mapDictionary.washington.stateMobileBg);

          $(mapDictionary.stateMobileSwap).attr('src', mapDictionary.washington.stateMobilePiece);

          $(mapDictionary.stateMobileContent).html(mapDictionary.washington.stateContent);

          $(mapDictionary.dimmedPiece).not(mapDictionary.washington.stateDimmed).addClass(mapDictionary.dimElementClick);

          $(mapDictionary.modalId).modal(
          {
            backdrop: false,
            keyboard: true
          });

          $(mapDictionary.modalId).addClass(mapDictionary.washington.stateModal);

          // Call Map Dictionary

          // Title
          $(mapDictionary.modalTitle).html(mapDictionary.washington.stateTitle);

          // Background
          $(mapDictionary.stateModalColor).attr('class', mapDictionary.washington.stateColor);

          // Description
          $(mapDictionary.modalBody).html(mapDictionary.washington.stateContent);

          $(mapDictionary.modalClose).on('click', function(e) {

              $(mapDictionary.modalId).removeClass(mapDictionary.washington.stateModal);
              $(mapDictionary.stateModalColor).removeClass(mapDictionary.washington.stateColor);
              $(mapDictionary.dimmedPiece).not(mapDictionary.washington.stateDimmed).removeClass(mapDictionary.dimElementClick);

          });

        }
      });

    // WV - West Virginia
    $(mapDictionary.westVirginia.stateSelector).on({

        mouseenter: function(e) {

          $(mapDictionary.dimmedPiece).not(mapDictionary.westVirginia.stateDimmed).addClass(mapDictionary.dimElementHover);

        },
        mouseleave: function(e){

          $(mapDictionary.dimmedPiece).not(mapDictionary.westVirginia.stateDimmed).removeClass(mapDictionary.dimElementHover);

        },
        click: function(e) {

          e.preventDefault();

          // Mobile
          $(mapDictionary.stateMobileCarousel).attr('class', mapDictionary.westVirginia.stateMobileBg);

          $(mapDictionary.stateMobileSwap).attr('src', mapDictionary.westVirginia.stateMobilePiece);

          $(mapDictionary.stateMobileContent).html(mapDictionary.westVirginia.stateContent);

          $(mapDictionary.dimmedPiece).not(mapDictionary.westVirginia.stateDimmed).addClass(mapDictionary.dimElementClick);

          $(mapDictionary.modalId).modal(
          {
            backdrop: false,
            keyboard: true
          });

          $(mapDictionary.modalId).addClass(mapDictionary.westVirginia.stateModal);

          // Call Map Dictionary

          // Title
          $(mapDictionary.modalTitle).html(mapDictionary.westVirginia.stateTitle);

          // Background
          $(mapDictionary.stateModalColor).attr('class', mapDictionary.westVirginia.stateColor);

          // Description
          $(mapDictionary.modalBody).html(mapDictionary.westVirginia.stateContent);

          $(mapDictionary.modalClose).on('click', function(e) {

              $(mapDictionary.modalId).removeClass(mapDictionary.westVirginia.stateModal);
              $(mapDictionary.stateModalColor).removeClass(mapDictionary.westVirginia.stateColor);
              $(mapDictionary.dimmedPiece).not(mapDictionary.westVirginia.stateDimmed).removeClass(mapDictionary.dimElementClick);

          });

        }
      });

    // WI - Wisconsin
    $(mapDictionary.wisconsin.stateSelector).on({

        mouseenter: function(e) {

          $(mapDictionary.dimmedPiece).not(mapDictionary.wisconsin.stateDimmed).addClass(mapDictionary.dimElementHover);

        },
        mouseleave: function(e){

          $(mapDictionary.dimmedPiece).not(mapDictionary.wisconsin.stateDimmed).removeClass(mapDictionary.dimElementHover);

        },
        click: function(e) {

          e.preventDefault();

          // Mobile
          $(mapDictionary.stateMobileCarousel).attr('class', mapDictionary.wisconsin.stateMobileBg);

          $(mapDictionary.stateMobileSwap).attr('src', mapDictionary.wisconsin.stateMobilePiece);

          $(mapDictionary.stateMobileContent).html(mapDictionary.wisconsin.stateContent);

          $(mapDictionary.dimmedPiece).not(mapDictionary.wisconsin.stateDimmed).addClass(mapDictionary.dimElementClick);

          $(mapDictionary.modalId).modal(
          {
            backdrop: false,
            keyboard: true
          });

          $(mapDictionary.modalId).addClass(mapDictionary.wisconsin.stateModal);

          // Call Map Dictionary

          // Title
          $(mapDictionary.modalTitle).html(mapDictionary.wisconsin.stateTitle);

          // Background
          $(mapDictionary.stateModalColor).attr('class', mapDictionary.wisconsin.stateColor);

          // Description
          $(mapDictionary.modalBody).html(mapDictionary.wisconsin.stateContent);

          $(mapDictionary.modalClose).on('click', function(e) {

              $(mapDictionary.modalId).removeClass(mapDictionary.wisconsin.stateModal);
              $(mapDictionary.stateModalColor).removeClass(mapDictionary.wisconsin.stateColor);
              $(mapDictionary.dimmedPiece).not(mapDictionary.wisconsin.stateDimmed).removeClass(mapDictionary.dimElementClick);

          });

        }
      });

    // WY - Wyoming
    $(mapDictionary.wyoming.stateSelector).on({

        mouseenter: function(e) {

          $(mapDictionary.dimmedPiece).not(mapDictionary.wyoming.stateDimmed).addClass(mapDictionary.dimElementHover);

        },
        mouseleave: function(e){

          $(mapDictionary.dimmedPiece).not(mapDictionary.wyoming.stateDimmed).removeClass(mapDictionary.dimElementHover);

        },
        click: function(e) {

          e.preventDefault();

          // Mobile
          $(mapDictionary.stateMobileCarousel).attr('class', mapDictionary.wyoming.stateMobileBg);

          $(mapDictionary.stateMobileSwap).attr('src', mapDictionary.wyoming.stateMobilePiece);

          $(mapDictionary.stateMobileContent).html(mapDictionary.wyoming.stateContent);

          $(mapDictionary.dimmedPiece).not(mapDictionary.wyoming.stateDimmed).addClass(mapDictionary.dimElementClick);

          $(mapDictionary.modalId).modal(
          {
            backdrop: false,
            keyboard: true
          });

          $(mapDictionary.modalId).addClass(mapDictionary.wyoming.stateModal);

          // Call Map Dictionary

          // Title
          $(mapDictionary.modalTitle).html(mapDictionary.wyoming.stateTitle);

          // Background
          $(mapDictionary.stateModalColor).attr('class', mapDictionary.wyoming.stateColor);

          // Description
          $(mapDictionary.modalBody).html(mapDictionary.wyoming.stateContent);

          $(mapDictionary.modalClose).on('click', function(e) {

              $(mapDictionary.modalId).removeClass(mapDictionary.wyoming.stateModal);
              $(mapDictionary.stateModalColor).removeClass(mapDictionary.wyoming.stateColor);
              $(mapDictionary.dimmedPiece).not(mapDictionary.wyoming.stateDimmed).removeClass(mapDictionary.dimElementClick);

          });

        }
      });

  });

})(jQuery);
