import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import HeadSection from "./HeadSection";
import FeatureSection from "./FeatureSection";
import AwardList from "./AwardList";
import AccountingShop from "../../shared/components/AccountingShop";
import UserCare from "../../shared/components/UserCare";
import ProductCarousel from "./ProductCarousel";

function Home(props) {
  const { selectHome } = props;
  useEffect(() => {
    selectHome();
  }, [selectHome]);
  return (
    <Fragment>
      <HeadSection />
      <ProductCarousel />
      <FeatureSection />
      <AwardList />
      <AccountingShop />
      <UserCare />
    </Fragment>
  );
}

Home.propTypes = {
  selectHome: PropTypes.func.isRequired,
};

export default Home;
