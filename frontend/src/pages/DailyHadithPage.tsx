import { Button } from "@/components/ui/button"
import {Link} from 'react-router';

export default function DailyHadithPage() {
    return (
        <>
        <h1>This is Daily Hadith page</h1>
        <Link to='/Favorites'><Button>goto Favorites</Button></Link>
        </>
    )
}