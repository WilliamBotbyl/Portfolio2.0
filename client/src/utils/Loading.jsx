import React from "react";
import { Box, Skeleton, SkeletonCircle, SkeletonText } from "@chakra-ui/react";
import appStyles from "../styles/app.module.scss";

const Loading = () => {
  return (
    <div className={appStyles.loadingContainer}>
      <Box isLoaded padding="8" boxShadow="lg" bg="white">
        <SkeletonCircle size="10" />
        <SkeletonText mt="10" noOfLines={5} spacing={5} />
      </Box>
    </div>
  );
};

export default Loading;
