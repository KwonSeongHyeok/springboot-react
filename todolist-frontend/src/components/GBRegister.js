import React,{useState} from "react";

const GBRegister = () => {
    
    const[GBPostTitle, setGBPostTitle] = useState('');
    const[GBPostContent, setGBPostContent] = useState('');
    const[GBPostImages, setGBPostImages] = useState('');

    const[result, setResult] = useState('');

   

    const 게시글등록 = () => {
        const inputValues = {};
        inputValues.GBPostTitle = GBPostTitle;
        inputValues.GBPostContent = GBPostContent;
        inputValues.GBPostImages = GBPostImages;

        fetch("/gbregister", {
            method : "POST",
            headers : {"Content-Type" : "application/json"},
            body : JSON.stringify(inputValues)
        })
        .then(response => response.text())
        .then(result => {
            if(Number(result) > 0){
                setResult('게시글 등록 완료');
                setGBPostContent('');
                setGBPostTitle('');
                setGBPostImages('');
            } else {
                setResult('게시글 등록 실패');
            }
        })
    }
    
    const handleImageChange = (event) => {
        const files = event.target.files;
        const imagesArray = [];
        for (let i = 0 ; i < files.length ; i++) {
          const file = files[i];
          const reader = new FileReader();
          reader.onloadend = () => {
            imagesArray.push(reader.result);
            if (imagesArray.length === files.length) {
                setGBPostImages(imagesArray);
            }
          };
          reader.readAsDataURL(file);
        }
      };    


    return (
        <div className="GB-container">
            <label> Title :
                <input type="text"
                        value={GBPostTitle}
                        onChange={e => setGBPostTitle(e.target.value)}
                        required/>
            </label>
            <label> Content :
                <textarea value={GBPostContent}
                        onChange={e => setGBPostContent(e.target.value)}
                        required
                ></textarea>
            </label>
            <label> images :
                <input type="file" accept="image/*" onChange={handleImageChange} multiple />
            </label>
            <button onClick={게시글등록}>게시글 등록하기</button>
            {GBPostImages && (
                <div>
                    <h2>미리보기</h2>
                    {GBPostImages.map(img => (
                        <img src={img}/>
                    ))}
                </div>
            )}
        </div>
    );
}
export default GBRegister;