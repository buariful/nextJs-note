import { useRouter } from 'next/router'

export default function Abc() {
    const router = useRouter()
    const query = router.query.product;
    return (
        <p style={{ "textAlign": "center" }}>/route2/<span style={{ "color": "red", "fontWeight": "bold" }}>{query}</span> </p>
    )
}