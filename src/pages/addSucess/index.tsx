import React from 'react';
import SideMenu from '../../components/sideMenu/sideMenu';
import NavigationBar from '../../components/NavigationBar';
import useGestorData from '../../components/useGestorData/userGestorData';
import Add from '../../components/addSucesso';

const addSucess: React.FC = () => {
  
    const data = useGestorData();
    return (
        <div className="grid grid-cols-[min-content,1fr] h-screen">
            <SideMenu gestorId={data.id}/>
            <main className="flex-grow bg-gray-50">
                <div className="flex items-center">
                    <NavigationBar name={data.name} picture={data.imgUrl}/>
                </div>  
                <Add txt="Seu indicador foi criado com Sucesso"></Add>
            </main>
        </div>
    );

};

export default addSucess;