
import { Profile } from './Profile';
import { Contract } from './Contract';
import { Job } from './Job';

export const defineAssociations = () => {
  Profile.hasMany(Contract, { foreignKey: 'clientId', as: 'clientContracts' });
  Profile.hasMany(Contract, { foreignKey: 'contractorId', as: 'contractorContracts' });
  Contract.belongsTo(Profile, { foreignKey: 'clientId', as: 'client' });
  Contract.belongsTo(Profile, { foreignKey: 'contractorId', as: 'contractor' });
  Contract.hasMany(Job, { foreignKey: 'contractId', as: 'jobs' });
  Job.belongsTo(Contract, { foreignKey: 'contractId' });
};
