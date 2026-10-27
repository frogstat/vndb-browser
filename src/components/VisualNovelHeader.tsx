type VisualNovelHeaderProps = {
    vn: any
};

function VisualNovelHeader({vn}: VisualNovelHeaderProps) {

    return(
        <div className="visual-novel-header">
            <h1>{vn.title}</h1>
            <p>{vn.description}</p>
            <img src={vn.image.thumbnail}/>
        </div>
    )
}

export default VisualNovelHeader;