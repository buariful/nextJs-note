import { useRouter } from 'next/router'

export default function DynamicRoute() {
    const route = useRouter()
    const query = route.query.dynamicRoute;

    return (
        <div>
            <p style={{ "textAlign": "center" }}>/route/<span style={{ "color": "red", "fontWeight": "bold" }}>{query}</span></p>
        </div>
    )
}