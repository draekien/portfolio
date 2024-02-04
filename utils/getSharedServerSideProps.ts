import getLastDeployment from '../components/footer/footer.fx';

export const getSharedServerSideProps = async () => {
  const lastDeployment = await getLastDeployment();

  return {
    lastUpdatedOn: lastDeployment.created_at,
  };
};
