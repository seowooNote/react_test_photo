/** @jsxImportSource @emotion/react */
import { useEffect, useRef, useState } from "react";
import WideButton from "../../components/WideButton/WideButton";
import { useInput } from "../../hooks/useInput";
import * as S from "./style";
import defaultProfile from "../../assets/images/profile/default.jpeg"
import { useNavigate } from "react-router-dom";


/**
 * 
 * 1. 이미지 클릭시 이미지 변경가능해야함.
 * 2. 수정하기 버튼 클릭시 localStorage에 key: user value: JSON데이터
 *  {
 *      nickname: "테스트계정",
 *      namd: "김준일",
 *      birthday: "1994-09-07",
 *      imgUrl: ""
 *  }
 *  저장되어야하고 페이지 로드시 불러와야함.
 * 3. RootHeader의 프로필 이미지도 변경되어야함.
 */
function Mypage(props) {
    const [ nicknameValue, handleNicknameOnChange, setNicknameValue ] = useInput();
    const [ nameValue, handleNameOnChange, setNameValue ] = useInput();
    const [ birthdayValue, handleBirthdayOnChange, setBirthdayValue ] = useInput();
    const [ profileUrl, setProfileUrl ] = useState(defaultProfile);
    const profileUrlRef = useRef();

    useEffect(() => {
        if(localStorage.getItem("user")) {
            setNicknameValue(JSON.parse(localStorage.getItem("user")).nickname);
            setNameValue(JSON.parse(localStorage.getItem("user")).name);
            setBirthdayValue(JSON.parse(localStorage.getItem("user")).birthday);
            setProfileUrl(JSON.parse(localStorage.getItem("user")).imgUrl);
        }
    }, []);

    // user 정보 객체
    const user = {
        nickname : "",
        name : "",
        birthday : "",
        imgUrl: ""
    };

    // updateUserDataHandler
    const updateUserDataHandler = () => {
        user.nickname = nicknameValue;
        user.name = nameValue;
        user.birthday = birthdayValue;
        user.imgUrl = profileUrl;
        localStorage.removeItem("user");
        localStorage.setItem("user", JSON.stringify(user));
        window.location.replace("/mypage");
    }

    // handle
    const changeFileHandle = (e) => {
        const fileReader = new FileReader();
        if(e.target.files.length === 0) {
            return;
        }
        fileReader.onload = (e) => {
            setProfileUrl(e.target.result);
        };
        fileReader.readAsDataURL(e.target.files[0]);
    }

    return (
        <div css={S.layout}>
            <div css={S.imageBox} onClick={() => profileUrlRef.current.click()}>
                <img src={profileUrl} alt="" />
                <input style={{display : "none"}} type="file" ref={profileUrlRef} onChange={changeFileHandle} />
            </div>
            
            <input css={S.inputBox} type="text" placeholder="닉네임" value={nicknameValue} onChange={handleNicknameOnChange}/>
            <input css={S.inputBox} type="text" placeholder="이름" value={nameValue} onChange={handleNameOnChange}/>
            <input css={S.inputBox} type="text" placeholder="생년월일" value={birthdayValue} onChange={handleBirthdayOnChange}/>
            <WideButton text={"수정하기"} onClick={updateUserDataHandler}/>
        </div>
    );
}

export default Mypage;