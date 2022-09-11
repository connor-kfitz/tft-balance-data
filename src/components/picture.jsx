import React from "react";

export default function Picture({url, alt, id}) {
    return (
        <img src={url} alt={alt} width="100px"/>
    );
}