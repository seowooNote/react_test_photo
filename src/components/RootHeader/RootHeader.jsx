/** @jsxImportSource @emotion/react */
import { Link } from "react-router-dom";
import * as S from "./style";
import defaultImg from "../../assets/images/profile/default.jpeg"
import { useState } from "react";

function RootHeader() {
    const [profile, setProfile] = useState();

    return (
        <div css={S.layout}>
            <Link css={S.titleLink} to={"/"}>
                <h1>사진첩 어플</h1>
            </Link>
            <Link css={S.mypageLink} to={"/mypage"}>
                <img src={!localStorage.getItem("user") ? defaultImg : JSON.parse(localStorage.getItem("user")).imgUrl} alt="" />
            </Link>
        </div>
    );
}

export default RootHeader;