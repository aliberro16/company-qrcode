import styled from "styled-components";
import { Box, Typography } from "@mui/material";
import MuiContainer from "@mui/material/Container";

export const Container = styled(MuiContainer)`
  width: 120px;
`;

export const Logo = styled.img`
  width: 120px;
`;
export const CompanyName = styled.h1``;
export const LabelWrapper = styled(Box)`
  display: flex;
  margin-left: 20px;
`;
export const Label = styled(Typography)``;
export const Content = styled(Typography)`
  padding-left: 4px;
`;
export const PageContent = styled(Box)`
  display: flex;
  margin-left: 20px;
`;
