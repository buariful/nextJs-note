import { useRouter } from 'next/router'

export default function Abc() {
    const router = useRouter()
    const { review, product } = router.query;
    console.log(router.query)
    return (
        <p style={{ "textAlign": "center" }}>/route2/<span style={{ "color": "red", "fontWeight": "bold" }}>{product}</span>/review/<span style={{ "color": "red", "fontWeight": "bold" }}>{review}</span> </p>
    )
}