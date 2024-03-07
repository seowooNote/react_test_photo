/** @jsxImportSource @emotion/react */
import * as S from "./style";
/**
 *  1. 사진 등록하기를 통해 등록된 이미지들을 각자 자유롭게 디자인하여 불러와야함.
 *  2. localStorage에 저장된 사진이 없으면 
 *      <h1>불러올 사진이 없습니다.<h1>
 *      문구가 중앙에 나오도록해야함.
 */

function PhotoAlbum() {
    const getPhotos = JSON.parse(localStorage.getItem("photo"));

    return (
        <div css={S.photoLayout}>
            {!getPhotos ? <h1 css={S.noPhoto}>불러올 사진이 없습니다.</h1> : getPhotos.map((photo) => {
                return <img css={S.photo} src={photo.imageUrl} alt="" key={photo.id} />
            })}

        </div>
    );
}

export default PhotoAlbum;