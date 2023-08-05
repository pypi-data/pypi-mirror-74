# coding: utf-8

"""
    Carbon DLS API

    Welcome to the Carbon DLS API docs!  You can find all relevant documentation here: https://github.com/carbon3d/carbon3d-api   # noqa: E501

    The version of the OpenAPI document: 0.0.8
    Contact: api-list@carbon3d.com
    Generated by: https://openapi-generator.tech
"""


import pprint
import re  # noqa: F401

import six

from carbon3d.configuration import Configuration


class OrdersResponse(object):
    """NOTE: This class is auto generated by OpenAPI Generator.
    Ref: https://openapi-generator.tech

    Do not edit the class manually.
    """

    """
    Attributes:
      openapi_types (dict): The key is attribute name
                            and the value is attribute type.
      attribute_map (dict): The key is attribute name
                            and the value is json key in definition.
    """
    openapi_types = {
        'limit': 'int',
        'offset': 'int',
        'total_count': 'int',
        'orders': 'list[OrdersResponseOrders]'
    }

    attribute_map = {
        'limit': 'limit',
        'offset': 'offset',
        'total_count': 'total_count',
        'orders': 'orders'
    }

    def __init__(self, limit=None, offset=None, total_count=None, orders=None, local_vars_configuration=None):  # noqa: E501
        """OrdersResponse - a model defined in OpenAPI"""  # noqa: E501
        if local_vars_configuration is None:
            local_vars_configuration = Configuration()
        self.local_vars_configuration = local_vars_configuration

        self._limit = None
        self._offset = None
        self._total_count = None
        self._orders = None
        self.discriminator = None

        if limit is not None:
            self.limit = limit
        if offset is not None:
            self.offset = offset
        if total_count is not None:
            self.total_count = total_count
        if orders is not None:
            self.orders = orders

    @property
    def limit(self):
        """Gets the limit of this OrdersResponse.  # noqa: E501

        Response limit  # noqa: E501

        :return: The limit of this OrdersResponse.  # noqa: E501
        :rtype: int
        """
        return self._limit

    @limit.setter
    def limit(self, limit):
        """Sets the limit of this OrdersResponse.

        Response limit  # noqa: E501

        :param limit: The limit of this OrdersResponse.  # noqa: E501
        :type: int
        """

        self._limit = limit

    @property
    def offset(self):
        """Gets the offset of this OrdersResponse.  # noqa: E501

        Response offset  # noqa: E501

        :return: The offset of this OrdersResponse.  # noqa: E501
        :rtype: int
        """
        return self._offset

    @offset.setter
    def offset(self, offset):
        """Sets the offset of this OrdersResponse.

        Response offset  # noqa: E501

        :param offset: The offset of this OrdersResponse.  # noqa: E501
        :type: int
        """

        self._offset = offset

    @property
    def total_count(self):
        """Gets the total_count of this OrdersResponse.  # noqa: E501

        Total number of orders matching the query  # noqa: E501

        :return: The total_count of this OrdersResponse.  # noqa: E501
        :rtype: int
        """
        return self._total_count

    @total_count.setter
    def total_count(self, total_count):
        """Sets the total_count of this OrdersResponse.

        Total number of orders matching the query  # noqa: E501

        :param total_count: The total_count of this OrdersResponse.  # noqa: E501
        :type: int
        """

        self._total_count = total_count

    @property
    def orders(self):
        """Gets the orders of this OrdersResponse.  # noqa: E501

        Orders  # noqa: E501

        :return: The orders of this OrdersResponse.  # noqa: E501
        :rtype: list[OrdersResponseOrders]
        """
        return self._orders

    @orders.setter
    def orders(self, orders):
        """Sets the orders of this OrdersResponse.

        Orders  # noqa: E501

        :param orders: The orders of this OrdersResponse.  # noqa: E501
        :type: list[OrdersResponseOrders]
        """

        self._orders = orders

    def to_dict(self):
        """Returns the model properties as a dict"""
        result = {}

        for attr, _ in six.iteritems(self.openapi_types):
            value = getattr(self, attr)
            if isinstance(value, list):
                result[attr] = list(map(
                    lambda x: x.to_dict() if hasattr(x, "to_dict") else x,
                    value
                ))
            elif hasattr(value, "to_dict"):
                result[attr] = value.to_dict()
            elif isinstance(value, dict):
                result[attr] = dict(map(
                    lambda item: (item[0], item[1].to_dict())
                    if hasattr(item[1], "to_dict") else item,
                    value.items()
                ))
            else:
                result[attr] = value

        return result

    def to_str(self):
        """Returns the string representation of the model"""
        return pprint.pformat(self.to_dict())

    def __repr__(self):
        """For `print` and `pprint`"""
        return self.to_str()

    def __eq__(self, other):
        """Returns true if both objects are equal"""
        if not isinstance(other, OrdersResponse):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, OrdersResponse):
            return True

        return self.to_dict() != other.to_dict()
