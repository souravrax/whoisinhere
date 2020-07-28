function calculateFaceLocation(data, image) {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const name = data.outputs[0].data.regions[0].data.concepts[0].name;
    const width = Number(image.width);
    const height = Number(image.height);

    return {
        name: name,
        left: clarifaiFace.left_col * width,
        top: clarifaiFace.top_row * height,
        right: width - (clarifaiFace.right_col * width),
        bottom: height - (clarifaiFace.bottom_row * height)
    }
}

module.exports = calculateFaceLocation;