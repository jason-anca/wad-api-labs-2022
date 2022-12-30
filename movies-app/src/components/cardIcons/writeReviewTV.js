import React from "react";
import RateReviewIcon from "@mui/icons-material/RateReview";
import { Link } from "react-router-dom";

const WriteReviewTVIcon = ({ tv }) => {
  return (
    <Link
      to={'/reviewsTV/form'}
      state={{
          tvId: tv.id,
        }}
    >
      <RateReviewIcon color="primary" fontSize="large" />
    </Link>
  );
};

export default WriteReviewTVIcon;