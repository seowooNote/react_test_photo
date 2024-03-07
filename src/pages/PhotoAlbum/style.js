import { css } from "@emotion/react";

export const photoLayout = css`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 420px;
    height: 100%;
    box-sizing: border-box;
    padding: 20px;
`;

export const noPhoto = css`
    position: absolute;
    top: 50%;
    margin-top: -21.25px;
    width: 100%;
    text-align: center;
    color: white;
`;

export const photo = css`
    width: 100%;
    margin-bottom: 15px;
`;