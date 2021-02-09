class GenericRes { 
    static success(res, code, data, next) { 
        return res.status(code).json({ 
            status: code,
            data
        });
    }

    static error(res, status, message) { 
        return res.status(status).json({ 
            status,
            message
        });
    }

    static ok(res, code, message) { 
        return res.status(code).json({ 
            status: code,
            message
        });
    }

    static err(res, code, message) { 
        return res.status(code).json({ 
            status: code,
            message
        });
    }
}
 export default GenericRes;
