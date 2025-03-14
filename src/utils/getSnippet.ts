type getSnippetsProps = {
    redirectUrl: string
    id: string
}

export const getSnippet = async ({ redirectUrl, id }: getSnippetsProps) => {
    try {
        const response = await fetch(`/api/snippets/${id}`);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        // Use Next.js router or window.location for client-side navigation
        window.location.href = redirectUrl;
    } catch (error) {
        console.error("Error fetching snippet:", error);
        throw error;
    }
}