import { Container } from "./styles";

export function TransactionsTable(){
    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td >Desenvolvimento de website</td>
                        <td className='deposit'>R$1.000</td>
                        <td>Desenvolvimento</td>
                        <td>20/02/2021</td>
                    </tr>

                    <tr>
                        <td >Aluguel</td>
                        <td className='withdraw'> - R$500</td>
                        <td>Casa</td>
                        <td>22/02/2021</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}