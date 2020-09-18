import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

//import calcite library style sheets
import Modal from 'calcite-react/Modal'
import { CalciteP, CalciteLi } from 'calcite-react/Elements';

import SubNav, {
    SubNavTitle,
    SubNavList,
    SubNavLink,
} from 'calcite-react/SubNav';

const NavBar = (props) => {

    //creating modals for the nav bar
    const [openInfoModal, setOpenInfoModal] = useState(false);
    const [openUpdatesModal, setOpenUpdatesModal] = useState(false);


    const noViewInfoModalHandler = () => {
        setOpenInfoModal(false);
    }

    const viewInfoModalHandler = () => {
        setOpenInfoModal(true);
    }


    const noViewUpdatesModalHandler = () => {
        setOpenUpdatesModal(false);
    }

    const viewUpdatesModalHandler = () => {
        setOpenUpdatesModal(true);
    }

    const docsModalZIndex = { zIndex: 1001 }



    return (
        <div className="NavBar">


            <Modal
                open={openInfoModal}
                onRequestClose={noViewInfoModalHandler}
                appElement={document.body}
                overlayStyle={docsModalZIndex}
                title="What is this?"


            >

                <CalciteP>
                    "On 4 August 2020, a large amount of ammonium nitrate stored at the port of the city of Beirut,
                    the capital of Lebanon, exploded, causing at least 200 deaths, 3 reported missing, 6,500 injuries,
                    US$10–15 billion in property damage, and leaving an estimated 300,000 people homeless.[1][2] Around 2,750 tonnes of
                    the substance (equivalent to around 1.1 kilotons of TNT) had been stored in a warehouse without proper safety measures for
                    the previous six years, after having been confiscated by the Lebanese authorities from the abandoned ship MV Rhosus.
                    The explosion was preceded by a fire in the same warehouse, but as of September 2020, the exact cause of the detonation is still under investigation. "
</CalciteP>
                <CalciteP>
                    Reading about this devasting explosion, I was curious to know how it affected the locals around the area.
                    The number of videos I watched about how it affected people and the result of the explosion, I was shocked by what happened.
                    I was curious to know what it would look like if that happened to my area. Since I started learning React.js and the ArcGIS API, I knew this would be a great concept to develop.
    </CalciteP>
                <CalciteP>
                    The purpose of this application is to emulate the explosion radius from Beirut and let a user see what it would like with their area of interest.
                    I hope that this will inform people about how devasting the explosion was by viewing the explosion radius on a location they are intimate with.
    </CalciteP>

            </Modal>


            <Modal
                open={openUpdatesModal}
                onRequestClose={noViewUpdatesModalHandler}
                appElement={document.body}
                overlayStyle={docsModalZIndex}
                title="Future Updates"


            >

                <CalciteLi>
                    Ability to change the map, rather than sticking with one
              </CalciteLi>

                <CalciteLi>
                    Allow the user to put an address instead of Longitude / Latitude
              </CalciteLi>


                <CalciteLi>
                    No re-render of map when choosing a button to click
              </CalciteLi>


                <CalciteLi>
                    rearrange the web page, make a more elegant design
              </CalciteLi>


                <CalciteLi>
                    Handle error cases
              </CalciteLi>



            </Modal>



            <SubNav legacy={true} blue={true}>
                <SubNavTitle>ArcGIS Beirut Application</SubNavTitle>
                <SubNavList>
                    <SubNavLink active href="#">
                        Map
            </SubNavLink>
                    <SubNavLink onClick={viewInfoModalHandler}>What is This?</SubNavLink>
                    <SubNavLink onClick={viewUpdatesModalHandler}>Future Updates</SubNavLink>
                </SubNavList>
            </SubNav>

        </div>
    );

}

export default NavBar;
