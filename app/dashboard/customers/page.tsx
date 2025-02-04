// import Pagination from '@/app/ui/invoices/pagination';
import { fetchFilteredCustomers } from '@/app/lib/data';
import Table from '@/app/ui/customers/table';
import { InvoicesTableSkeleton } from '@/app/ui/skeletons';
import { Suspense } from 'react';

export default async function Page(props: {
    searchParams?: Promise<{
        query?: string;
        page?: string;
    }>
}) {
    const searchParams = await props.searchParams;
    const query = searchParams?.query || '';
    const currentPage = Number(searchParams?.page) || 1;
    const customers = await fetchFilteredCustomers(query);

    return (
        <div className="w-full">
            <Suspense key={query} fallback={<InvoicesTableSkeleton />}>
                <Table customers={customers} />
            </Suspense>
        </div>
    );
}