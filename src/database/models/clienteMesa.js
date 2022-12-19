'use strict'

module.exports = (sequelize, DataTypes) => {

    let clienteMesa = sequelize.define('clienteMesa', {
        id: {
            type: DataTypes.BIGINT, // tipo de dato
            autoIncrement: true, // autoincrementable
            primaryKey: true, // clave primaria 
            allowNull: false // no permitir nulo
        },
        /*
        idCliente: {
            type: DataTypes.BIGINT, // tipo de dato
            primaryKey: true, // clave primaria 
            allowNull: false // no permitir nulo
        },
        idMesa: {
            type: DataTypes.BIGINT, // tipo de dato
            primaryKey: true, // clave primaria 
            allowNull: false // no permitir nulo
        },
        */
        createdAt: {
            type: DataTypes.DATE,
            field: 'created_at',
            defaultValue: DataTypes.NOW,
            allowNull: false
        },
        updatedAt: {
            type: DataTypes.DATE,
            field: 'updated_at',
            defaultValue: DataTypes.NOW,
            allowNull: false
        },
        deletedAt: {
            type: DataTypes.DATE,
            field: 'deleted_at'
        }
    }, {
        paranoid: true,
        freezeTableName: true,
    })

    clienteMesa.associate = models => {
        // al meter las relaciones aca, el sequilize agrega los campos de la identidad referencial
        // automaticamente, por eso no los defino aca
        clienteMesa.belongsTo(models.cliente)
        clienteMesa.belongsTo(models.mesa)
    }

    return clienteMesa
}
