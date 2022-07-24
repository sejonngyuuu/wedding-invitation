import TopContainer from "./TopContainer";
import ContentsContainer from "./ContentsContainer";
import LocationContainer from "./LocationContainer";
import GalleryContainer from "./GalleryContainer";
import ContactContainer from "./ContactContainer";
import CommentComponent from "../components/CommentComponent";

function Main() {
    return (
        <div>
            <TopContainer/>
            <ContentsContainer/>
            <LocationContainer/>
            <GalleryContainer/>
            <ContactContainer/>
            <CommentComponent/>
        </div>
    );
}

export default Main;
