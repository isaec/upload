const { React } = goosemodScope.webpackModules.common,
    { findByDisplayName } = goosemodScope.webpackModules
const { useState, useRef, useEffect } = React

const getUrl = type => {
    switch (type) {
        case "text/javascript":
        case "application/json":
        case "application/x-shellscript":
            //curly braces
            return "https://discord.com/assets/d6bb78c1d64640ad06cc8cdd1c61b67d.svg"
        case "text/markdown":
        case "text/plain":
            //blocks of text
            return "https://discord.com/assets/3c2ce4428c2c44824b07162f648524f5.svg"
        case "text/css":
        case "text/html":
            //</>
            return "https://discord.com/assets/557b6b6b982a8c2b2c97048b86e2e6c3.svg"
        case "application/zip":
            //zipped up file
            return "https://discord.com/assets/4f27cbf7f975daa32fe7c8dec19ce2de.svg"
        case "video/mp4":
            //play arrow, film reel
            return "https://discord.com/assets/81d1e0f3ad7aa06b1a82da2492cf8699.svg"
        case "audio/mpeg":
        case "audio/wav":
        case "application/x-audacity-project":
        case "audio/basic":
            //speaker icon
            return "https://discord.com/assets/7674eb0d869afebca7b1f3a5202506c6.svg"
        default:
            //blank file
            return "https://discord.com/assets/66084381f55f4238d69e5cbe3b8dc42e.svg"
    }
}

const File = React.memo(props => <div
    className="File">
    <img src={getUrl(props.type)} alt="file icon" className="fileIcon" />
    <div className="fileText"
    >{props.name}</div>
    <div className="fileText"
    >{props.size} bytes</div>
    <div className="fileText"
    >{props.type || "???/???"}</div>
    <div className="fileText wide padtop"
    >{props.path}</div>
    <div className="fileText wide"
    >{props.url || "no url"}</div>
</div>)


export default File