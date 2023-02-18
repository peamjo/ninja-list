import Link from "next/link"
import { useEffect } from "react";
import { useRouter } from "next/router"

const NotFound = () => {
    const router = useRouter();

    useEffect(() => {
        setTimeout( () => {
            //router.go(-1)
            router.push('/')
        }, 3000)
    },)

    return ( 
        <div classname="not-found">
            <h1>Oooops</h1>
            <h2>That page can not be found.</h2>
            <p>Go back to the <Link className="not-found-link" href="/">Homepage</Link></p>
        </div>
     );
}
 
export default NotFound;
