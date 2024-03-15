import getLastDeployment from '../components/footer/footer.fx';

export const getSharedStaticProps = async () => {
  const lastDeployment = await getLastDeployment();

  return {
    props: {
      lastUpdatedOn: lastDeployment.created_at,
    },
    revalidate: 86400, // once per day
  };
};
