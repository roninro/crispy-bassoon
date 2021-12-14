/** @jsx jsx */
import { jsx, css } from "@emotion/react"
import { GatsbyImage, getImage, getSrc } from "gatsby-plugin-image"
import createJustifiedLayout from "justified-layout"
import "photoswipe/dist/default-skin/default-skin.css"
import "photoswipe/dist/photoswipe.css"
import React, { useState, Fragment, useRef, useEffect } from "react"
import PhotoSwipeWrapper from "./photoSwipe"

type Props = {
  images?: Array<any>
}

type StateType = {
  containerStyle: {}
  items: any[]
}

const Gallery = ({ images }: Props) => {
  const [isOpen, setIsOpen] = useState(false)
  const [index, setIndex] = useState(0)
  const [containerWidth, setContainerWidth] = useState(0)
  // const [geometry, setGeometry] = useState<JustifiedLayoutResult>()
  const [geometryState, setGeometryState] = useState<StateType>()

  const container = useRef<HTMLDivElement>(null)

  const items = images
    ? images.map((image: any) => ({
        src: image.childImageSharp.original.src,
        w: image.childImageSharp.original.width,
        h: image.childImageSharp.original.height,
        msrc: getSrc(image),
        width: image.childImageSharp.original.width,
        height: image.childImageSharp.original.height,
      }))
    : []

  useEffect(() => {
    if (!container.current) throw Error("container is not assigned")
    getBoxesGeometry()

    window.addEventListener("resize", getBoxesGeometry)
    return () => {
      window.removeEventListener("resize", getBoxesGeometry)
    }
  }, [containerWidth])

  const getBoxesGeometry = () => {
    const containerWidth = container.current
      ? container.current.offsetWidth || container.current.clientWidth
      : 0
    setContainerWidth(containerWidth)
    const geometry = createJustifiedLayout(items, {
      containerWidth: containerWidth,
      targetRowHeight: 200,
      containerPadding: 0,
      boxSpacing: 4,
    })

    setGeometryState({
      containerStyle: {
        position: "relative",
        height: `${geometry.containerHeight}px`,
      },
      items: geometry.boxes.map((box: any) => ({
        style: {
          height: `${box.height}px`,
          width: `${box.width}px`,
          top: `${box.top}px`,
          left: `${box.left}px`,
          position: "absolute",
        },
      })),
    })
  }

  const handleOpen = (index: number) => {
    setIsOpen(true)
    setIndex(index)
  }
  const handleClose = () => setIsOpen(false)

  return (
    <Fragment>
      <div
        css={css`
          .gatsby-image-wrapper {
            position: unset !important;
          }
        `}
        ref={container}
        style={geometryState ? geometryState.containerStyle : {}}
      >
        {images &&
          images.map((image, i) => (
            <div
              style={geometryState ? geometryState.items[i].style : {}}
              key={i}
              onClick={() => {
                handleOpen(i)
              }}
            >
              <GatsbyImage alt="" image={getImage(image)!} />
            </div>
          ))}
      </div>
      <PhotoSwipeWrapper
        isOpen={isOpen}
        index={index}
        items={items}
        onClose={handleClose}
      />
    </Fragment>
  )
}

export default Gallery
