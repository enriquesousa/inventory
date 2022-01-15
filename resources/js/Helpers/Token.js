class Token{
    
    isValid(token){
        const payload = this.payload(token)
        if (payload) {
            return payload.iss = "https://homestead.inventory/api/auth/login" || "https://homestead.inventory/api/auth/signup" ? true : false
        }
        return false
    }

    payload(token){
        const payload = token.split('.')[1]
        return this.decode(payload)
    }

    decode(payload){
        return JSON.parse(atob(payload))
    }
}

export default Token = new Token()