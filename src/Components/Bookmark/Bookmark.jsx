import PropTypes from "prop-types";
import Bookmarks from "../Bookmarks/Bookmarks";

const Bookmark = ({bookmark}) => {
    const {title} = bookmark;
  return (
    <div className="bg-slate-300 p-4 m-4 rounded-xl">
        <h3 className="text-2xl">{title}</h3>
    </div>
  )
}

Bookmark.PropTypes = {
    bookmark : PropTypes.object
}

export default Bookmark