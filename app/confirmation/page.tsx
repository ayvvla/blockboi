interface searchParamsProps {
  searchParams: { status: string; tx_ref: string };
}

const Successful = ({ searchParams }: searchParamsProps) => {
  const { status, tx_ref } = searchParams;

  const res = fetch(`https://api.flutterwave.com/v3/transactions/${tx_ref}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${process.env.FLW_SECRETKEY}`,
      "Content-Type": "application/json",
    },
  });

  return <div className="my-6 min-h-[50vh] ">Payment successful</div>;
};

export default Successful;
