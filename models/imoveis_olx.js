module.exports = (sequelize, DataTypes) => {
    const ImoveisOLX = sequelize.define("ImoveisOLX", {
        id: {
            primaryKey: true,
            type: DataTypes.INTEGER(11).UNSIGNED,
            allowNull: false,
            autoIncrement: true,
        },
        nome: {
            type: DataTypes.STRING(128),
            allowNull: false,
            field: 'str_nome',
            defaultValue: '',
        },
        valor: {
            type: DataTypes.DECIMAL(10, 2).UNSIGNED,
            allowNull: false,
            field: 'int_value',
            defaultValue: 0
        },
        codigoBruto: {
            type: DataTypes.STRING(128),
            allowNull: false,
            field: 'str_codigo_bruto',
            defaultValue: '',
        },
        codigo: {
            type: DataTypes.STRING(128),
            allowNull: false,
            field: 'str_codigo',
            defaultValue: '',
        },
        urlImovel: {
            type: DataTypes.STRING(128),
            allowNull: false,
            field: 'str_url_imovel',
            defaultValue: '',
        },
        detalhes: {
            type: DataTypes.TEXT,
            allowNull: false,
            field: 'str_detalhes_imovel',
            defaultValue: '',
        }, 
        createdAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
            allowNull: false,
            field: 'dt_created_at'
        },
        updatedAt: {
            type: DataTypes.DATE,
            field: 'dt_updated_at',
        },
    }, {
        freezeTableName: true,
        tableName: 'tb_imoveis_olx',
        timestamps: false
    });
    return ImoveisOLX;
}