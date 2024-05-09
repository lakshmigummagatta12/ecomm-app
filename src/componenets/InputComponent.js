export const InputComponenet = (props)=> {
    
    const { 
        register, 
        type = "text", 
        lable, 
        placeholder, 
        name, 
        errors= {},
        registerProps = {},
    } = props;

    return(
        <div className="form-group mt-10">
            <label >{lable}</label>
            <input
                {...register(name, {...registerProps })} 
                type={type}
                className="form-control" 
                placeholder={placeholder}
            />
            {
                errors && errors[name] ? (<span className="text-danger">{errors[name]?.message}</span>) : null
            }
        </div>
    )
}