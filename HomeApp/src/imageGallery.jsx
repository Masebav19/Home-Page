import { useEffect, useState } from "react"

const times = length => Array.from({ length }, (_,i)=>i)
export default function ImageGallery(){
    const [images,SetImages] = useState([])
    useEffect(() => {
      getLenth().then(data => {
        const length = data.length
        times(length).forEach(i => {
            getImage(i+1).then(buffer => {
                const blod = new Blob([buffer], { type: 'image/jpeg' })
                const url = URL.createObjectURL(blod)
                SetImages(prevUrls => [...prevUrls,url])
            })
        })
      })
    },[])
    async function getLenth (){
      const result = await fetch('http://172.31.36.30:4002/home/imagenLength')
      const data = await result.json()
      return data
    }
    async function getImage (index) {
      const result = await fetch(`http://172.31.36.30:4002/home/image/${index}`)
      const data = await result.arrayBuffer()
      return data
    }

    const Image =  ({ url, index }) => {
        return(
            <img src={url} alt={`Foto${index}`} />
        )
    }
    return(
        <>
        { images.length > 0 &&
            <section className="gallery-container">
                {
                    images.map((src, index) => {
                        return(
                            <Image 
                            key={index}
                            url={src}
                            index={index}
                            />   
                        )
                    })
                }
            </section>
        }
        
        </>
    )
}