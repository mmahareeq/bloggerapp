
import './single.css'
import Siderbar from '../../components/siderbar/Siderbar'
import SinglePost from '../../components/singlepost/SinglePost'
export default function Single() {
    return (
        <div className="single">
            {/*post */}
            <SinglePost/>
            <Siderbar/>
        </div>
    )
}
