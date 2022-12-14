import { useStorageUpload } from "@thirdweb-dev/react";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import AutoConnect from "./testing"
export default function Component() {


  const { mutateAsync: upload } = useStorageUpload();
  const [checker, setChecker] = useState("");
  const onDrop = useCallback(
    async (acceptedFiles: File[]) => {
      const uris = await upload({ data: acceptedFiles });
      console.log(uris);
      setChecker(uris[0]);
    },
    [upload]
  );
    function dragevent(){
     const x= document.getElementById("draggist")
     x.classList.add("itisdragged")
    }
    function undragevent(){
      const x = document.getElementById("draggist");
      x.classList.remove("itisdragged")
    }
  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div className="border-2 flex-col border-white h-full  min-h-screen bg-[#161616] text-white py-4 px-72" >
      <div className="font-[Poppins] font-bold  text-[2.1em] w-[100%] text-center text-[#F8F8F8]  mb-1">
        IPFS Uploader
      </div>
      <AutoConnect />
      <div className="font-[Inter] font-light  text-center text-[1.3em] text-[#b1b1b1] mb-[-4px]">
        Upload your files to IPFS.
      </div>
      <div className="font-[Inter] font-light  text-center text-[1.3em] text-[#b1b1b1]  mb-6">
        With ZERO hassle.{" "}
      </div>
      <div className="font-[Inter] font-light text-[1.2em] text-white mb-4 ">
        This portal allows you to upload literally anything you want to
        <span className=" text-[#4b9ea1]"> IPFS:</span> A free, permanent and
        decentralized storage protocol. 
      </div>
      <div
      id="draggist"
        {...getRootProps()}
        className="dragger py-52 text-center border-4 border-white bg-[#222222] hover:bg-[#272727]  transition duration-150 hover:cursor-pointer"
        onDragEnter={dragevent}
        onDragLeave={undragevent}
      >
        <input {...getInputProps()} className="border-2 border-red" />
        <p className="text-white font-[Inter]">Drop files here to upload them to IPFS</p>
      </div>
      <div>Send me the unique link as an NFT: </div>
      <div>{checker != "" ? checker : ""}</div>
    </div>
  );
}
