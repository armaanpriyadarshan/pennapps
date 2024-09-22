const ngrok =  'https://72fa-2607-fb91-bd9e-8787-68bd-a362-29f2-e1f4.ngrok-free.app'

export async function logIn(email: string, password: string) {
    const response = await fetch(`${ngrok}/api/users/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
        throw new Error('Login failed');
    }

    return await response.json();
}

export async function signUp(name: string, email: string, password: string) {
    const response = await fetch(`${ngrok}/api/users/signup`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
    });

    if (!response.ok) {
        throw new Error('Sign up failed');
    }

    return await response.json();
}

export async function getUser(id: string) {
    const response = await fetch(`${ngrok}/api/users/${id}`);

    if (!response.ok) {
        throw new Error('Failed to fetch user data');
    }

    return await response.json();
}
