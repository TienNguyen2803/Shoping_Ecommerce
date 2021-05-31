import React, { useEffect } from "react";
import PropTypes from "prop-types";
import HeadSection from "./HeadSection";
import FeatureSection from "./FeatureSection";
import AwardList from "./AwardList";
import AccountingShop from "../../shared/components/AccountingShop";
import UserCare from "../../shared/components/UserCare";
import ProductCarousel from "./ProductCarousel";
import { Box } from "@material-ui/core";

function Home(props) {
  const { selectHome } = props;
  useEffect(() => {
    selectHome();
  }, [selectHome]);
  return (
    <Box style={{ marginTop: -150 }}>
      <HeadSection />
      <ProductCarousel />
      <FeatureSection />
      <AwardList />
      <AccountingShop />
      <UserCare />
    </Box>
  );
}

Home.propTypes = {
  selectHome: PropTypes.func.isRequired,
};

export default Home;
