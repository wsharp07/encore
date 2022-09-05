import { Table, Spinner } from 'flowbite-react';
import { FC } from 'react';
import { trpc } from '../utils/trpc';

const Client: FC = () => {
  const query = trpc.useQuery(['client.getAll']);

  if (!query.data)
    return (
      <div className="mt-10 text-center">
        <Spinner color="purple" size="xl" />
      </div>
    );

  return (
    <div>
      <Table className="mt-4">
        <Table.Head>
          <Table.HeadCell>Client Name</Table.HeadCell>
          <Table.HeadCell>MAC Address</Table.HeadCell>
          <Table.HeadCell>IP Address</Table.HeadCell>
          <Table.HeadCell>Status</Table.HeadCell>
          <Table.HeadCell>Collection</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {query.data.clients.map(
            ({
              id,
              name,
              mac_address,
              ip_address,
              active,
              collection_name,
            }) => {
              return (
                <Table.Row
                  className="bg-white dark:border-gray-700 dark:bg-gray-800"
                  key={id}
                >
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {name}
                  </Table.Cell>
                  <Table.Cell>{mac_address}</Table.Cell>
                  <Table.Cell>{ip_address}</Table.Cell>
                  <Table.Cell>{active ? 'Active' : 'Inactive'}</Table.Cell>
                  <Table.Cell>{collection_name || 'N/A'}</Table.Cell>
                  <Table.Cell>
                    <a
                      href="/tables"
                      className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                    >
                      Edit
                    </a>
                  </Table.Cell>
                </Table.Row>
              );
            }
          )}
        </Table.Body>
      </Table>
    </div>
  );
};

export default Client;
