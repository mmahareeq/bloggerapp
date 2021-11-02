import './write.css'

export default function Write() {
    return (
        <div className='write'>
            <img src="https://images.pexels.com/photos/9789946/pexels-photo-9789946.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
             className="writeImage" alt=""/>
            <form className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                        <i class=" writeIcon fas fa-plus"></i>
                    </label>
                    <input type="file" id="fileInput"  style={{display:"none"}}/>
                    <input type="text" placeholder="Title" className="writeInput" autoFocus={true} />

                </div>
                <div className="writeFormGroup">
                   <textarea 
                    placeholder="tell your story" 
                    type="text"
                    className="writeInput writeText">

                    </textarea>
                </div>
                <button className="writeSumbit"> Publish</button>
            </form>
        </div>
    )
}
