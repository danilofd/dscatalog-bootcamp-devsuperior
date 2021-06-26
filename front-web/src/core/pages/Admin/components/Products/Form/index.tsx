import { makeRequest } from 'core/utils/request';
import React, { useState } from 'react';
import BaseForm from '../../BaseForm';
import './styles.scss';

type FormState = {
    name: string;
    price: string;
    category: string;
    description: string;
}

type FormEvent = React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>;

function Form() {
    const [formData, setFormData] = useState<FormState>({
        name: '',
        price: '',
        category: '',
        description: ''
    });

    const handleOnChange = (event: FormEvent) => {
        const name = event.target.name;
        const value = event.target.value;
        
        setFormData(data => ({ ...data, [name]: value }));
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const payload = {
            ...formData,
            imgUrl: "https://i.guim.co.uk/img/media/f58aa676496e9eaba611000477f28d0232fd91eb/0_165_3378_2027/master/3378.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=c48d69de6062bdf393f5af91dfb76225",
            categories: [{ id: formData.category }]
        }

        makeRequest({ url: '/products', method: 'POST', data: payload })
    }

    return (
        <form onSubmit={handleSubmit}>
        <BaseForm title="Cadastrar Produto">
            <div className="row">
                <div className="col-6">
                    <input
                        value={formData.name}
                        name="name"
                        type="text"
                        className="form-control mb-5"
                        onChange={handleOnChange}
                        placeholder="Nome do Produto"
                    />

                    <select value={formData.category}
                            className="form-control mb-5" 
                            onChange={handleOnChange} 
                            placeholder="Categorias"
                            name="category">
                        <option value="1">Livros</option>
                        <option value="3">Computadores</option>
                        <option value="2">Eletronicos</option>
                    </select>

                    <input
                        value={formData.category}
                        name="price"
                        type="text"
                        className="form-control"
                        onChange={handleOnChange}
                        placeholder="Preco"
                    />
                </div>
                <div className="col-6">
                    <textarea 
                        name="description" 
                        className="form-control" 
                        value={formData.description}
                        onChange={handleOnChange}
                        cols={30} 
                        rows={10}/>
                </div>
            </div>
        </BaseForm>
        </form>
    );
}

export default Form;